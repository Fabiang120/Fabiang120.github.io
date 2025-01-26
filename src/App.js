import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return(
      <div>
        <Home />
      </div>
  );
}

export default App;
