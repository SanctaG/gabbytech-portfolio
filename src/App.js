// App.js
import './App.css';
import Portfolio from './Portfolio';
import { ThemeProvider } from 'styled-components';
import themes from './themes'; // Remove curly braces for default import
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme] || themes.light}>
      <Portfolio theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;