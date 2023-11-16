import React, { useEffect, useState } from 'react';
import Loading from './page/loading';
import './App.css';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, [])
  if (loading){
    return <Loading />
  }
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
