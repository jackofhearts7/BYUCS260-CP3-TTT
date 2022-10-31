import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Help from "./pages/Help";
import Board from "./board";
import Info from "./info";
import "./App.css";

import { useState } from 'react';


export default function App() {
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState('');
    const resetBoard = () => {
        setReset(true);
    }
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}