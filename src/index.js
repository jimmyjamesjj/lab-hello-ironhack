import React from 'react'
import './style.css'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
render(){
    
     return(
      <div>
            <div>say hello to react js</div>
            <div> <img src="/images/icon1.png"/></div>
            <div> <img src="/images/icon2.png"/></div>
            
     </div>      
     )      
        

}

}

ReactDOM.render(<Hello/>, document.querySelector('#helloapp'))