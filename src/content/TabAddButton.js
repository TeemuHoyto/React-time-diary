import React from 'react'
import '../CSS/TabAddButton.css'
import FileThatSharesProps from './FileThatSharesProps.js'
import Footer from './Footer.js'
class TabAdd extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: true,
            name: ""
        }
        this.handleCklick = this.handleCklick.bind(this)
    }
    handleCklick(prevState) {
this.setState(prevState =>{
    prevState.visible = !prevState.visible
     
        }) 
        console.log(this.state.visible)
    }
       
    render() {
        return (
            
         <button class="buttonOfdesignatedPoweer" onClick = 
            {this.props.handleCklick} > 
            Add Tab 
         </button>
         
          
        )
    }
}


export default TabAdd