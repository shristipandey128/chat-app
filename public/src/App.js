import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Register from "./pages/Register";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import ChatContainer from "./components/ChatContainer";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/ChatContainer" element={<ChatContainer />} />
        <Route path="/Contacts " element={<Contacts  />} />
        <Route path="/Welcome" element={<Welcome />} />

      
      </Routes>
      </BrowserRouter>
  );
}

export default App