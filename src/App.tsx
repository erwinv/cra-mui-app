import { Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import Firebase from './Firebase';
import Nav from './Nav';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="firebase" element={<Firebase />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
