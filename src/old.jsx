// import React from 'react';
// import SlotM from './Slotmatch';


// <SlotM/>



// const App = () => {
//     return (<>
//         <h1 className='heading_style'> 🎰
//          Welcome to <span style={{ fontWeight: 'bold' }}>
//                 Slot machine game </span>🎰
//         </h1>
//       <div>
//         <SlotM  x='😄' y='😄' z='😄'/>
//         <SlotM  x='😆' y='🤣' z='😂'/>
//         <SlotM  x='🤫' y='🤫' z='🤫'/>
//         <SlotM  x='🍌' y='🍎' z='🥭'/>
//         </div>
//     </>);
// };


// import React from 'react';



// const App =() => {

//   const state = useState();

// const [count, setCount] = useState(0);

// const IncNum=()=>{
//   setCount(count - 1);

//   // console.log("clicked"+ count++);
// }
//   return(
//     <>
//       <h1> {count} </h1>
//       <button onClick={IncNum}>Click me</button>
//     </>
//   );
// }

// const App= () =>{
//   let newTime = new Date().toLocaleTimeString();

//   const[ctime, setCtime] = useState(newTime);
//   const UpdateTime=()=>{
//      newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);

//   }

//   return(
//     <>
//       <h1>{ctime}</h1>
//       <button onClick={UpdateTime}> Get Time</button>
//     </>
//   );
// }

// const App = () => {


//   let time = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(time);

//   const UpdateTime = ()=>{
//   let time = new Date().toLocaleTimeString();
//   setCtime(time);

//   };

//   setInterval(UpdateTime,1000);

//   return (<>
//     <h1>{ctime}</h1>
//   </>)
// }

// import React, { useState } from 'react';


// const App = () => {
//   const purple = "orange";
//   const [bg, setBg] = useState(purple);
//   const hello = "Click Me";
//   const [read, readBg] = useState(hello);

//   const bgChange = () => {

//     // console.log('clicked');
//     let newBg = '#34495e';
//     setBg(newBg);
//     readBg('Done 🐲');
//   };

//   const bgUpdate = () => {
//     setBg('green');
//     readBg('Double done 🦁');
//   }

//   return (<>
//     <div style={{ backgroundColor: bg }}>
//       <button onMouseOver={bgChange} onMouseLeave={bgUpdate}>
//         {read}
//       </button>
//     </div>
//   </>);
// };

import React, { useState } from 'react';

const App = () => {

  // const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmailName] = useState('');
  // const [number, setNumber] = useState('');
  // const [fullName, setFullName] = useState();
  // const [newName, setNewName] = useState();
  // const [emailName, setEmail] = useState();
  // const [newNumber, setnewNumber] = useState();
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    quali: "",
  });

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setFullName(name);
  //   setNewName(lastName);
  //   setEmail(email);
  //   setnewNumber(number);
  // }

  // const inputEvent = (event) => {
  //   console.log(event.target.value);
  //   setName(event.target.value);
  // };
  // const inputEventTwo = (event) => {
  //   console.log(event.target.value);
  //   setLastName(event.target.value);
  // };
  // const inputEventThree = (event) => {
  //   console.log(event.target.value);
  //   setEmailName(event.target.value);
  // };
  // const inputEventFour = (event) => {
  //   console.log(event.target.value);
  //   setNumber(event.target.value);
  // };

  const inputEvent = (event) => {


    const { name, value } = event.target;


    setFullName((preValue) => {

      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };




      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   }
      //   else if (name === "email") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: value,
      //       phone: preValue.phone,
      //     };
      //   }
      //   else if (name === "phone") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: value,
      //     };
      //   }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };


  return (<>
    <div className="main_div">
      <form onSubmit={onSubmits}>
        <div>
          <h1> Hello {fullName.fname} {fullName.lname}  </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <p>{fullName.quali}</p>
          <input type='text'
            placeholder="Enter Your First Name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input type='text'
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <br />
          <input type='email'
            placeholder="Enter Your Email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
          />
          <br />
          <input type='number'
            placeholder="Enter Your Number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
          />
          <br />
          <input type='text'
            placeholder="Enter Your Qualification"
            name="quali"
            onChange={inputEvent}
            value={fullName.quali}
          />
          <button type='submit'>Click me 👍</button>
        </div>
      </form>
    </div>
  </>
  );
}


export default App;
