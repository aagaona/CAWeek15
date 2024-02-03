import { useState } from 'react';
import MockApi from './API/MockApi';
import Deckcard from './Components/Deckcard';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddCommander from './Components/AddCommander';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const [decks, setDecks] = useState ([])


  return (
    <div className="App">
      <header className="App-header">
        <MockApi decks={decks} setDecks={setDecks} />
        <Navbar />
      </header>
      <div className='container'>
        <AddCommander decks={decks} setDecks={setDecks} />
        {decks.map(deck => <Deckcard deck={deck} setDecks={setDecks} key={deck.id} />)}
      </div>
      <footer className='footer'>
        <div>
          🏰 Property of Power Play Gamez 🏰
        </div>
      </footer>
    </div>
  );
}

export default App;
