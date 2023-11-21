
import './App.css';

import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { ACTION, COMEDY, ORIGINALS } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={ORIGINALS} title="Netflix Originals"/>
      <RowPost url={ACTION} title="Action" isSmall />
      <RowPost url={COMEDY} title="Comedy" isSmall />

    </div>
  );
}

export default App;
