import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    
    
        <Router />
        
    </BrowserRouter>
    </div>
    
  );
};

export default App;