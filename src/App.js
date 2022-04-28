import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
