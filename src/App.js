import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './table/Table';

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then((res) => {
      console.log(res.data);
      setApiData([...res.data]);
    });
  }, []);
  return (
    <div className='App'>
      {apiData.map((item) => {
        return (
          <div key={item.id}>
            {' '}
            <Table title={item.title} />{' '}
          </div>
        );
      })}
    </div>
  );
}

export default App;
