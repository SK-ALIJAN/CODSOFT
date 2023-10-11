import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <div className="sideContainer">
          <Sidebar />
        </div>
        <Content />
      </div>
    </>
  );
}

export default App;
