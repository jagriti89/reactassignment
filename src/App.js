
import { useState } from 'react';
import './App.css';





function App() {
  const[formValues,setFormValues]=useState({
    email:"email",
    firstName:"jaggu",
    lastName:"singh"
  })

  const handleSubmit=(event)=>{
    event.preventDefault()
  }
  const handleOnChange = (event) => {
    console.log("Change..");

    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='input-group'>
      <label htmlFor="">Email</label>
      
      { <input required
      type="email"
      name="email"
      id=""
      onChange={handleOnChange}
      value={formValues.email}/> }

      </div>
      <div className='input-group'>
        <label htmlFor=''>firstName</label>
         
        <input  onChange={handleOnChange}
          value={formValues.firstName}
          type="text"
          name="firstName"
          id=""
          
        />
      </div>
      <div className='input-group'>
        <lable htmlFor="">lastName</lable>
        <input   onChange={handleOnChange}
          value={formValues.lastName}
          type="text"
          name="lastName"
          id=""/>
      </div>
      <div className='input-group'><button>submit</button></div>
    </form>
  )
}

export default App;
