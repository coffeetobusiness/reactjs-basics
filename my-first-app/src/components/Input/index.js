import React from "react";


// component
class Input extends React.Component{
    state = {
        // inputValue:"Meri Value",
        count: 0
    }

    // handleSubtractChange = (event) => {
    //     let newValue = this.state.count - 1
    //     this.setState({count: newValue})
    // }

    // handleAddChange = (event) => {
    //     let newValue = this.state.count + 1
    //     this.setState({count: newValue})
    // }

    handleChange = (type) => {
        let newValue = this.state.count
        if(type === 'add'){
            newValue++
        }else{
            newValue--
        }
        this.setState({count: newValue})
    }

    render(){
       
        return <div>
           {/* <input type={'name'} name='name' 
           onChange={this.handleChange} />
            <p>State Value => {this.state.inputValue}</p> */}


            <div>
                <button onClick={
                    (e) => this.handleChange('add')            }>Add</button>
                    {this.state.count}
                <button onClick={() => {
                    this.handleChange('sub')
                    }}>Subtract</button>
            </div>
        
        </div>
    }
}

export default Input

