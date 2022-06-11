import Navigation from "./layout/Header";
import Left from "./layout/Left";
import Main from "./components/main/Main";

import "./App.scss"

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <Left></Left>
        <Main></Main>
      </div>
      
    </>
  );
}

export default App;
