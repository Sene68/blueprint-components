import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./layout/Header";
import Left from "./layout/Left";
import Main from "./components/main/Main";
import GettingStarted from "./components/main/GettingStarted";
import BreadcrumbsCore from './components/core/breadcrumbs/BreadcrumbsCore';
import ButtonCore from './components/core/button/ButtonCore';
import ButtonGroupCore from './components/core/buttongroup/ButtonGroupCore';
import ButtonGroupPopoverCore from './components/core/buttongroup/ButtonGroupPopoverCore';
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
import TabsCore from './components/core/tabs/TabsCore';
import TagCore from './components/core/tag/TagCore';
import TextCore from './components/core/text/TextCore';
import TreeCore from './components/core/tree/TreeCore';
import FormGroupCore from './components/form/formgroup/FormGroupCore';
import ControlGroupCore from './components/form/controlgroup/ControlGroupCore';
import CheckboxCore from './components/form/checkbox/CheckboxCore';
import RadioCore from './components/form/radio/RadioCore';

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
          <Route path="/buttonpopover" element={<ButtonGroupPopoverCore/>} />
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
          <Route path="/tabs" element={<TabsCore/>} />
          <Route path="/tag" element={<TagCore/>} />
          <Route path="/text" element={<TextCore/>} />
          <Route path="/tree" element={<TreeCore/>} />
          <Route path="/formgroup" element={<FormGroupCore/>} />
          <Route path="/controlgroup" element={<ControlGroupCore/>} />
          <Route path="/checkbox" element={<CheckboxCore/>} />
          <Route path="/radio" element={<RadioCore/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
