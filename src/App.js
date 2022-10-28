import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


// https://reactjs.org/docs/hooks-intro.html
// https://www.npmjs.com/package/axios


function App() {
  const [name, setName] = useState("123")

  useEffect(()=> {
    console.log("Component rendered")

    return () => {
      console.log("Unmounted")
    }
  }, [])

  useEffect(() => {
    console.log("Name variable changed to: ", name)
  }, [name])
  
  return (
    <div className="App">
      {name}
      <button onClick={()=>{
        setName("345")
      }}>Rename</button>
    </div>
  );
}

export default App;
