import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App1 = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList('');
  };

  const deleteItems =(id)=>{
    console.log('Deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arrElm, index)=>{
        return index !== id;
      })
    })
}

  return <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDO List</h1>
        <br />
        <input type="text" placeholder="Add an Items"
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li>
     {inputList}
     </li> */}

          {items.map((itemval, index) => {
           return <ToDoLists  key={index} id={index}
              text = {itemval}
              onSelect = {deleteItems}
            />
          })}

        </ol>

      </div>

    </div>

  </>
};

export default App1;