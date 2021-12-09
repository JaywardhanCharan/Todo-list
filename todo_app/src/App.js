import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase'
import './App.css';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as the get added/removed
  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  
  const addTodo = (event) => {
    // this will fire off when we click this button
    event.preventDefault(); // will stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })



       setTodos([...todos, input]);
       setInput(''); // clear up the input after hitting submit

  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      <FormControl>
      <InputLabel>Write a Todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} variant="outlined" type="submit" onClick={addTodo} >Add todo</Button>
      {/* <Button >Add todo</Button> */}
      {/* <button >Add todo</button> */}

      </form>
      

      <ul>
      {todos.map(todo => (
        <Todo text={todo}/>
        //<li>{todo}</li>
      ))}
      </ul>


          </div>
  );
}

export default App;
