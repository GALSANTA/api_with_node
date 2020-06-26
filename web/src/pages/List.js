import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import api from '../service/api';

function List() {
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
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
            </div>
        </>
    );
}

export default List;