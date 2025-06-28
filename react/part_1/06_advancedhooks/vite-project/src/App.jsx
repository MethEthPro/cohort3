import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setnumAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)




  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-=`[]{}"
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordtoCliboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{passwordGenerator()},
    [length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      
      <h1 className='text-white text-center '>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-green-200'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white text-black my-3 rounded-lg'
        placeholder='password'
        readOnly  
        ref={passwordRef} />


        <button
        onClick={copyPasswordtoCliboard}
        
        className='bg-blue-500 hover:bg-blue-600 active:scale-80 text-white font-bold py-2 px-4 rounded transition-transform duration-400'>copy</button>
       </div>

       <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input 
          type="range" 
          min={6} 
          max={100}
          value={length}
          className='cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
           />
          <label >Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput" 
            onChange={()=>{
              setnumAllowed((prev)=>!prev)
            }} 
            />
            <label>Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput" 
            onChange={()=>{
              setcharAllowed((prev)=>!prev)
            }} 
            />
            <label>Characters</label>

        </div>


       </div>
    </div>
    

    </>
  )
}

export default App
