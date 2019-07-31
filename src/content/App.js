import React from 'react';
import Tabs from './Tabs.js';
import NewInput from './NewInput.js'
import Header from './Header.js'
import Footer from './Footer.js'
import '../CSS/App.css'




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  
  render(){
  return (
      <div>
        <Header />
       
        <Tabs>
          
          <div  label="Todo">
            <NewInput />
          </div>
          <div label="Calendar">
          
          </div>
          <div label="TimeDiary">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
          
        </Tabs>
        <Footer />
      </div>
    );
  }
}
export default App;