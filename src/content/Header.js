import React from "react"
import '../CSS/Header.css'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            selectedMenu: []
        }

    }
    render(){
        return(
            <header>header with multible tabs</header>
        )
    }
}


export default Header