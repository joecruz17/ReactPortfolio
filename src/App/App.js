import './App.css';
import { Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/" element={<Layout />} ></Route>
      </Routes>
   
    </div>
  );
}

export default App;