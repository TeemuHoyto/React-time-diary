import React from "react"


class NewInput extends React.Component{
    constructor(){
        super()
        this.state = {
            Item:"",
            list:[

            ],
            todos:[]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

  

    handleClick(event){
event.preventDefault()
const newItem = this.state.Item
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
        handletodo(id) {
            this.setState(prevState => {
                const updatedTodos = prevState.list.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                return {
                    todos: updatedTodos
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

    render(){
        const items = this.state.list.map((item, key) =>
        <div>
        
<input 
                type="checkbox" 
                checked={this.props.completed} 
                onChange={() => this.handletodo(this.props.id)}
            />
        <li key={item.id}>{item.itemm}</li>
        </div>
    );
    
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
                
                {items}
          
            </div>
        )
    }
}


export default NewInput