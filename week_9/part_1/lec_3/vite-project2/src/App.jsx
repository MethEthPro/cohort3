import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PostComponent } from './Post'

function App() {

  const [posts,setPosts] = useState([])

  

  function addPost(){
    setPosts([...posts,{
      name:"sarthak",
      subtitle:"11000 followers",
      time:"2m ago",
      image:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      description:"hi oomf"
    }])

  }

  const postComponents = posts.map(post=><PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )

  return (
    <>
      <div style={{background:"#dfe6e9",height:"100vh"}}>
        <button onClick={addPost}>add post</button>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div>
              
              {postComponents}

            </div>
        </div>
      </div>
    </>
  )
}

export default App
