import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['take dogs out','anything']);
  const [input, setinput] = useState('');
  console.log('🧜🏼‍♀️', input);


  const addTodo = (event) => {
    // this will fire when we click the add todo button
    event.preventDefault();   // prevents RELOAD
  }

  return (
    <div className="App">
     <h1>What's todays plan?</h1>

     <form>

     <FormControl>
         <InputLabel >✅Write a TODO </InputLabel>
         <Input value={input} onChange = {event => setinput(event.target.value)}/>
       </FormControl>

       <Button disabled={!input} onClick={addTodo} type='submit' variant="contained" color="primary">
          ADD ToDo
        </Button>

     </form>
    </div>
  );
}

export default App;
