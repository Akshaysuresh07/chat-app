
import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Landing from './components/Join';

function App() {
  return (
  <>
 
  <Routes>
  <Route path='/' element={<Landing/>} />
  <Route path='/chat' element={<Chat/>} />
  
  </Routes>
 

    </>
 
  );
}

export default App;
