import { useState } from 'react';

function App() {
  const [newkey, setNewKey] = useState('');
  const [newvalue, setNewValue] = useState('');

  async function submitNewEntry(e) {
    e.preventDefault()

    if(newkey === "" || newvalue === "") return

    console.log(newkey)
    console.log(newvalue)

    let result = await fetch('http://localhost:3001/newentry', {
      method: 'POST',
      mode: 'no-cors',
      body: {key: newkey, value: newvalue},
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {console.log(res); return res})

  }

  return (
  <>
     <input value={newkey} onChange={e => setNewKey(e.target.value)} type="text" id="item"/>
     <input value={newvalue} onChange={e => setNewValue(e.target.value)} type="text" id="item"/>
     <button onClick={submitNewEntry} type="submit">Add</button>
  </>
)}

export default App;
