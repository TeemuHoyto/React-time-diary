import React from 'react'
import TabAddButton from './TabAddButton.js'
class FileThatSharesProps extends React.Component {
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
render(){
    return(
<TabAddButton 
         handleClick={this.handleCklick} 
          />
    )
}
}

export default FileThatSharesProps