import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hometown3DMap from "./Components/Hometown3DMap";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
