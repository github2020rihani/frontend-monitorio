import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StatUser from './components/Rapport/User';
import User from './pages/Rapport/User';

function App() {
  return (
    <div class="wrapper">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} ></Route>
          <Route path="/statistique/user" element={<User />} ></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
