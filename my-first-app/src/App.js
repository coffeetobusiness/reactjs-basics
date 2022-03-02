import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Button from './components/Button';
import InputComp from './components/Input';
import React from 'react';

function App() {
  // States
  const [name, setName] = React.useState('MY')
  
  return (
    <div className="App">
       {/* <input type={'name'} name='name' 
           onChange={
             (e) => {
               setName(e.target.value)
             }
           } />
      This is {name} application */}
      <InputComp />
      
    </div>
  );
}

export default App;
