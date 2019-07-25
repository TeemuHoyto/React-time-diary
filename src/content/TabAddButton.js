import React from 'react'
import '../CSS/TabAddButton.css'

class TabAddButton extends React.Component {
    constructor() {
        super()
        this.state = {
            visibility: true,
            name: ""
        }
        this.handleCklick = this.handleCklick.bind(this)
    }
    handleCklick() {
        this.setState({
            visibility: !this.state.visibility

  
        }) 
       
    }
       
    render() {
        const DeStyle = this.state.visibility ? {display:'none'} :{}
        return (
           <div>
<button className="buttonOfdesignatedPoweer" onClick = 
            {this.handleCklick} > 
            Add Tab 
         </button>
         <div className="textarea" style={DeStyle}>
    <input className="TabAddTextArea"name="TabName" type="textarea"></input>
    <br/>
    <button className="TabAddTextAreaSubmitButton" type="button" name="submit" label="submit">submit</button>
  </div>
         </div>
         
        )
    }
}
    

export default TabAddButton
