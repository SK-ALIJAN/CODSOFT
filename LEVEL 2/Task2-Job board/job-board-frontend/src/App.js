import './App.css';
import MainRoute from "./Router/MainRoute"
import Footer from './components/common/Footer';
import Navber from './components/common/Navber';


function App() {
  return (
    <div className="App">
     <Navber/>
     <MainRoute/>
     <Footer/>
    </div>
  );
}

export default App;
