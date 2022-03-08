import Header from './components/layout/Header.js';
import Home from './components/Home.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container-fluid">
        <Home />
      </div>
    </div>
  );
}

export default App;
