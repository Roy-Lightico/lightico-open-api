import "./App.css";
import Esigns from "./Esigns";
import Header from "./Header";
import Navbar from "./Navbar";
import Sessions from "./Sessions";
import Workflows from "./Workflows";
import Payment from "./Payment";
import Documents from "./Documents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="App-header">
        {/* <Authenticate /> */}
        <Sessions />
        <Esigns />
        <Workflows />
        <Payment />
        <Documents />
      </div>
    </div>
  );
}

export default App;
