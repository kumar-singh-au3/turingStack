import Calendar from './components/Calendar'
import LocalEvents from './components/LocalEvents'
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Calendar />
      <LocalEvents />
    </div>
  );
}

export default App;
