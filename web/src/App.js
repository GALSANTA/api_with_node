import React, { useState, useEffect } from 'react';
import api from './service/api';


function App() {
  const [a, setA] = useState([]);

  useEffect(() => {
    var k = Promise.resolve(api.index());
    k.then(function(v) {
      setA(v.data);
      
    });
  
  }, []);
  
  return (
    <div>
     {a.map(()=>{
       return(<h1>HELO</h1>)
     })}
    </div>
  );
}

export default App;
