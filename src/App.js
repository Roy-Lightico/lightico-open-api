// import logo from './logo.svg';
import "./App.css";
import Authenticate from "./Authenticate";
import Esigns from "./Esigns";
import Header from "./Header";
import Navbar from "./Navbar";
import Sessions from "./Sessions";
import Workflows from "./Workflows";
import Payment from "./Payment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="App-header">
        <Authenticate />
        <Sessions />
        <Esigns />
        <Workflows />
        <Payment />
      </div>
    </div>
  );
}

export default App;
