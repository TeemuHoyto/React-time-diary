import React from "react"


class NewInput extends React.Component{
    constructor(){
        super()
        this.state = {
            Item:"",
            list:[]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

  

    handleClick(event){
event.preventDefault()
const newItem = this.state.Item
const completed = false
const id = this.state.list.length +1
const OBJ = {'id':id, 'item':newItem, 'completed':completed}

this.setState(prevState => {
prevState.list.push([OBJ])

    console.log(this.state.list)
})
this.setState({
    Item: []
})
        }
        
    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]:value
        })
        
    }
    render(){
     //   const TodoItems = this.state.list.item
        return(
            <div className="center">
               <label htmlFor="Item">
                <input 
                name = "Item"
                type = "text"
                value = {this.state.Item}
                onChange = {this.handleChange}
                />
                </label>

                <button onClick={this.handleClick}>Add ITEM</button> 
                
          
            </div>
        )
    }
}


export default NewInput