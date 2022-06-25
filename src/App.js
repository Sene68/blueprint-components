import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./layout/Header";
import Left from "./layout/Left";
import Main from "./components/main/Main";
import GettingStarted from "./components/main/GettingStarted";
import BreadcrumbsCore from './components/core/breadcrumbs/BreadcrumbsCore';
import ButtonCore from './components/core/button/ButtonCore';
import ButtonGroupCore from './components/core/buttongroup/ButtonGroupCore';
import CalloutCore from './components/core/callout/CalloutCore';
import CardCore from './components/core/card/CardCore';
import CollapseCore from './components/core/collapse/CollapseCore';
import DividerCore from './components/core/divider/DividerCore';
import EditableTextCore from './components/core/editabletext/EditableTextCore';
import MenuCore from './components/core/menu/MenuCore';
import NavbarCore from './components/core/navbar/NavbarCore';
import NonIdealStateCore from './components/core/nonidealstate/NonIdealStateCore';
import ProgressBarCore from './components/core/progressbar/ProgressBarCore';
import SpinnerCore from './components/core/spinner/SpinnerCore';

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
          <Route path="/button" element={<ButtonCore/>} />
          <Route path="/buttongroup" element={<ButtonGroupCore/>} />
          <Route path="/callout" element={<CalloutCore/>} />
          <Route path="/card" element={<CardCore/>} />
          <Route path="/collapse" element={<CollapseCore/>} />
          <Route path="/divider" element={<DividerCore/>} />
          <Route path="/editabletext" element={<EditableTextCore/>} />
          <Route path="/menu" element={<MenuCore/>} />
          <Route path="/navbar" element={<NavbarCore/>} />
          <Route path="/nonidealstate" element={<NonIdealStateCore/>} />
          <Route path="/progressbar" element={<ProgressBarCore/>} />
          <Route path="/spinner" element={<SpinnerCore/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
