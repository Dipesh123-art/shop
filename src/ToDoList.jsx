import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp';

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);

    }

    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        });
        setItem("");

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDO List</h1>
                    <br />
                    <input type="text"
                        value={item}
                        placeholder="Add an Items"
                        onChange={itemEvent} />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>

                        {newitem.map((val, index) => {
                            return <ListComp key={index} text={val}/>;
                        })}
                    </ol>

                </div>
            </div>
        </>
    );
}

export default ToDoList;