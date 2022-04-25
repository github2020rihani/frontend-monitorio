import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import {
  Routes,
  Route,
} from "react-router-dom";
import User from './pages/Rapport/User';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div class="wrapper">
      
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} ></Route>
          <Route path="/statistique/user" element={<User />} ></Route>
         
        </Routes>
        <Footer />
      

    </div>
  );
}

export default App;
