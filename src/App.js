import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      banana
    </ThemeProvider>
  );
}

export default App;
