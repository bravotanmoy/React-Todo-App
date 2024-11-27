import { useState } from 'react'

const App = () => {


  let [FormObj, SetFormObj] = useState({fName:"", lName:"Biswas", city:"", gender:"" })


  return (
      <div className='container'>

          <form>
            <input value={FormObj.fName} placeholder='First Name'/><br/>
            <input value={FormObj.lName} placeholder='Last Name'/><br/>
            <select value={FormObj.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
            </select>
            <br/>
            <input checked={FormObj.gender === 'Male'} type='radio' name='gander'/>Male
            <input checked={FormObj.gender === 'Female'} type='radio' name='gander'/>Female 
            <br/>
            <button type='submit'>Submit</button>
          </form>

      </div>
  );
};


export default App
