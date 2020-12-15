import './App.css';
import TextInput from './TextInput';
import store from './store/';

function App() {
  return (
    <div className="App">
      <TextInput store={store}/>
    </div>
  );
}

export default App;
