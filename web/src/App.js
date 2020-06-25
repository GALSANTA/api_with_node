import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import api from './service/api';


function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    var k = Promise.resolve(api.index());
    k.then(function (v) {
      setDados(v.data);

    });

  }, []);

  return (
    <>
      <div className="container">
        {dados.map((d) => (<Card key={d.id} dados={d}></Card>))}
      </div>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large red">
          <i class="large material-icons">mode_edit</i>
        </a>
      </div>
    </>
  );
}

export default App;
