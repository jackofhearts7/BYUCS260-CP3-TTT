import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Help from "./pages/Help";
import Board from "./board";
import "./App.css";

import { useState } from 'react';


export default function App() {
  return (

    
    <BrowserRouter basename="/tictactoe/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}