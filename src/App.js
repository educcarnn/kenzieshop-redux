
import './App.css';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle></GlobalStyle>
        <Routes></Routes>
      </header>
    </div>
  );
}

export default App;
