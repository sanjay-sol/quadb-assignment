import './App.css';
import { Routes , Route } from 'react-router';

import Post from './components/Post';
import Dashboard from './components/Dashboard';
function App() {

  return (
    <>
    
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/post/:id/:name" element={<Post/>}/>

    </Routes>
    </>
  )
}

export default App;
