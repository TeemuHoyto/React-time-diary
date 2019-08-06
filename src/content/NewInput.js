import React from "react"
import '../CSS/NewInput.css'

class NewInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Item:"",
            list:[],
            
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
const placeholder = "NameOfObject " + newItem +" " +  id
const OBJ = {'id':id, 'itemm':newItem, "placeholder":placeholder, 'completed':completed}

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
        }
        
    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]:value
        })
        
    }

    handleTheChangeOfTodoContent = (id, event) => {
        
        const index = this.state.list.findIndex((list)=> {
            return (list.id === id);
        })
    
        const liste = Object.assign({}, this.state.list[index]);
        liste.itemm = event.target.value;
    
        const lists = Object.assign([], this.state.lists);
        lists[index] = liste;
    
        this.setState({list:lists});
      }
    

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
                placeholder="Add Todo and click button"
                className="InputOfTodos"
                value = {this.state.Item}
                onChange = {this.handleChange}
                />
                </label>
            <div className="buttonToCenter">
                    <button className="AddItemButton" onClick={this.handleClick}>Add ITEM</button> 
                    </div>
                {list.map((item)  =>
              <div>
                  <div className="CheckBoxOfTodosmappeddiv" onClick = {() => this.handletodo(item.id)}>
                  

             <input 
                name = {item.id}
                type = "checkbox"
            id="checcerbox"
                checked = {item.completed}
                onChange = {this.handleChange}
                />
               <span className="checkmark"></span>
                </div>
                <input 
                key= {item.item + item.id}
                placeholder = {item.placeholder}
                name={item.itemm}
                type="text"
                className="InputOfTodosmapped"
                value={item.itemm}
                id = {item.id}
                style={item.completed ? completedStyle : null } 
                onChange={this.handleTheChangeOfTodoContent.bind(this, item.id)}
                />
                
                </div>
                )}
            </div>
        )
    }
}


export default NewInput