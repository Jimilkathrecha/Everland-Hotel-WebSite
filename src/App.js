import './App.css';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Loader1 from './components/preloaders/Loader';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Rooms from './pages/rooms/Rooms';
import RoomDetails from './pages/rooms/RoomDetails';
import Login from './components/modals/Login';
import Register from './components/modals/Register';


function App() {

  const [loading, setLoading] = useState(true);
  const [loginmodalstate, setLoginmodalstate] = useState(false);
  const [registermodalstate, setRegistermodalstate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? <Loader1 /> :
        <BrowserRouter>
        <Login loginmodalstate={loginmodalstate} setLoginmodalstate={setLoginmodalstate} setRegistermodalstate={setRegistermodalstate}/>
        <Register registermodalstate={registermodalstate} setRegistermodalstate={setRegistermodalstate} setLoginmodalstate={setLoginmodalstate} />
          <Header setLoginmodalstate={setLoginmodalstate} setRegistermodalstate={setRegistermodalstate}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/Room-Details" element={<RoomDetails />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
