import React from 'react'
import TabAddButton from './TabAddButton.js'
import '../CSS/Footer.css'
import '../CSS/TabAddButton.css'
function Footer(){
    
        return(
            <div>
            
            <div className="textarea">
            <input class="TabAddTextArea"name="TabName" type="textarea"></input>
            <br/>
            <button class="TabAddTextAreaSubmitButton" type="button" name="submit" label="submit">submit</button>
          </div>
           
          </div> 

        )
    }


export default Footer