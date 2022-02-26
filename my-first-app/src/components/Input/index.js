import React from "react";


let newValue = 'New Variable'
// component
class Input extends React.Component{
    state = {
        value: 'Nothing'
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        // newValue = e.target.value

        // console.log(newValue, this.state.value)
    } 

    render(){
       
        return <div>
           <input type={'name'} name='name' 
           onChange={this.handleChange} />
        <p>State Value => {this.state.value}</p>
        <p>Variable => {newValue}</p>
        </div>
    }
}

export default Input

