import React from "react"
import '../CSS/NewInput.css'

class NewInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Item:"",
            list:[

            ],
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handletodo = this.handletodo.bind(this)
    }

  

    handleClick(event){

event.preventDefault()
const newItem = this.state.Item
if (this.state.Item === ''){
    return null
}else{
const completed = false
const id = this.state.list.length +1
const OBJ = {'id':id, 'itemm':newItem, 'completed':completed}

this.setState(prevState => {
prevState.list.push(OBJ)

    console.log(this.state.list)
})
this.setState({
    Item: ""
})
        }
    }      
        handletodo(id) {
            this.setState(prevState => {
                const updatedTodos = prevState.list.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                return {
                    list: updatedTodos
                    
                }
                
            })
            {console.log(this.state.list)}
        }
        
    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]:value
        })
        
    }
 /*   handleChangeAwesome(event){
        
        this.setState({
            list.itemm: event.target.value
        })
        
    }*/

    render(){

        const completedStyle = {
            textDecoration:" line-through",
            color:"pink",
        }
        let list = this.state.list
    
     //   const TodoItems = this.state.list.item
        return(
            <div className="center">
               <label htmlFor="Item">
                <input 
                name = "Item"
                type = "text"
                className="InputOfTodos"
                value = {this.state.Item}
                onChange = {this.handleChange}
                />
                </label>

                <button className="AddItemButton" onClick={this.handleClick}>Add ITEM</button> 
                {list.map((item)  =>
              <div>
                  <div className="CheckBoxOfTodosmapped">
             <input 
                name = {item.id}
                type = "checkbox"
            
                checked = {item.completed}
                onChange = {() => this.handletodo(item.id)}
                />
                </div>
                <input 
                name="name"
                type="text"
                className="InputOfTodosmapped"
                value={item.itemm}
                id = {item.id}
                style={item.completed ? completedStyle : null } />
                
                </div>
                )}
            </div>
        )
    }
}


export default NewInput