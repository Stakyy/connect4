import Home from './pages/Home'
import './App.css';
import Header from './components/Header';
import {Route} from 'react-router-dom'
import Game from './pages/Game';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path = '/' component={Home} exact/>
        <Route path = '/game' component={Game} />
      </div>      
    </div>
  );
}

export default App;
