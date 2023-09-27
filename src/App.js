import './App.css';
import { Button, Badge } from 'designsystemak';
import Fetchdata from './fetchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World <Button label={'Click Here only...'}></Button>
      </header>
      <Fetchdata />
    </div>
  );
}

export default App;
