import React from "react"
import '../CSS/Calendar.css'
import dateFns from "date-fns"

class Calendar extends React.Component{
    constructor(){
        super()
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
        };
    }

renderHeader() {}
renderDays() {}
renderCells() {}

onDateClivk = day => {}
nextMonth = () => {}
prevMonth = () => {}

    render() {
    return (
<div className="calendar">
    {this.renderHeader()}
    {this.renderDays()}
    {this.renderCells()}
    
    
</div>
    )
    }
}


export default Calendar