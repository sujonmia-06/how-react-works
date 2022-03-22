import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='miPhone' price='14500'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
