import React from "react"


class NewInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Item:"",
            list:[

            ]
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handletodo = this.handletodo.bind(this)
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
                value = {this.state.Item}
                onChange = {this.handleChange}
                />
                </label>

                <button onClick={this.handleClick}>Add ITEM</button> 
                {list.map((item)  =>
              <div>
             
                <p style={item.completed ? completedStyle : null } onClick={() => this.handletodo(item.id)} key={item.id}>{item.itemm} </p>
                
                </div>
                )}
            </div>
        )
    }
}


export default NewInput