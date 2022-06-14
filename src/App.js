import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./layout/Header";
import Left from "./layout/Left";
import Main from "./components/main/Main";
import GettingStarted from "./components/main/GettingStarted";
import BreadcrumbsCore from './components/core/breadcrumbs/BreadcrumbsCore';


import "./App.scss"

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <Left></Left>
        <Routes>
          <Route path="/" element={<Main/>} ></Route>
          <Route path="/getting-started" element={<GettingStarted/>} />
          <Route path="/breadcrumbs" element={<BreadcrumbsCore/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
