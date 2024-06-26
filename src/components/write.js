import React, {useState} from 'react';
import app from "../firebase";
import { getDatabase, ref, set, push } from 'firebase/database';

function Write() {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "nature/Fruits"));
        set(newDocRef, {
            fruitName: inputValue1,
            fruitDefinition: inputValue2
        }).then( () => {
            alert("Data saved Successfully")
        }).catch((error) => {
            alert("Error: ", error.message);
        })
    }

    return (
        <div>

            <input type='text' value={inputValue1}
             onChange={(e) => setInputValue1(e.target.value)} />

            <input type='text' value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />

            <button onClick={saveData}>Save Data</button>
        </div>
    )
}

export default Write;