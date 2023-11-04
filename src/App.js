
// import { useState } from 'react';
import './App.css';
import PreviousState from './Component/PreviousState';

function App() {
  // const [formDetails, setName] = useState({
  //   name:'',
  //   email:''
  // });
  // const formHandler = (e) => {
  //   e.preventDefault();
  // }
  return (
    <div className="App">
      {/* <form name='myform' onSubmit={formHandler}>
        <input type='text' name='Name' placeholder='Name' onChange={(e) => setName({...formDetails, name: e.target.value })}/>
        <input type='text' name='Email' placeholder='Email' onChange={(e) => setName({...formDetails,email: e.target.value})} />
        <input type='submit' />
      </form>
      <h1>Name : {formDetails.name}</h1>
      <h1>Email: {formDetails.email}</h1> */}
      <PreviousState/>
    </div>
  );
}

export default App;
