import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
