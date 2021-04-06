// import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';

// const ToDoList = () => {

//     const [num , setNum] = useState(0);

//     const incNum =() =>{
//         setNum(num+1);
//     }

//     const decNum =() =>{
//         if (num>0){
//         setNum(num-1);
//         }else{
//             setNum(num);
//             alert('Sorry, Minimum number Limit is Zero');

//         }

//     }


//     return(
//         <>
//         <div className='main_div'>
//         <div className='center_div'>
//         <h1>{num}</h1>
//         <div className='btn_div'>
//         <button onClick={incNum}>
//             <AddIcon/>
//         </button>
//         <button onClick={decNum}>
//         <RemoveIcon/>
//         </button>

//         </div>

//         </div>

//         </div>
//         </>
//     )
// }

// export default ToDoList;

import React from 'react';

const ToDoLists = (props) =>{

    
    return (<>
    <div className='todo_style'>
    <i className="fa fa-times" aria-hidden="true"
    onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    <li>{props.text}</li>
    </div>
    </>
    )
};

export default ToDoLists;