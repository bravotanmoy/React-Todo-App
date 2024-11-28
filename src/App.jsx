import { useState } from 'react'

const App = () => {


  let [FormObj, SetFormObj] = useState({fName:"", lName:"Biswas", city:"", gender:"" })

  const InputOnChange = (property, value) => {

      SetFormObj(prevObj => ({
          ...prevObj,
          [property]:value
      }))

  }


  const FormSubmit = (e) => {
    e.preventDefault();


    alert(JSON.stringify(FormObj));
    // console.log(SetFormObj);

  }


  return (
      <div className='container'>

          <form onSubmit={FormSubmit}>
            <input onChange={() => {InputOnChange("fName", e.target.value ) }} value={FormObj.fName} placeholder='First Name'/><br/>

            <input onChange={() => {InputOnChange("lName", e.target.value ) }} value={FormObj.lName} placeholder='Last Name'/><br/>

            <select onChange={() => {InputOnChange("city", e.target.value ) }} value={FormObj.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
            </select>
            <br/>

            <input onChange={() => {InputOnChange("gander", 'Male' ) }}  checked={FormObj.gender === 'Male'} type='radio' name='gander'/>Male
            <input onChange={() => {InputOnChange("gander", 'Female' ) }}  checked={FormObj.gender === 'Female'} type='radio' name='gander'/>Female 
            <br/>


            <button type='submit'>Submit</button>
          </form>

      </div>
  );
};


export default App
