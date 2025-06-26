// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)
// }

// the issue with this render function is that 
// for each attribute we have to manually set it


function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const mainContainer = document.getElementById("root")

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}


customRender(reactElement, mainContainer)