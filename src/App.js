// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

let counter = 0;
function App() {
  console.log('did this happens');
  counter++;
  return (
    <div className="App">
      <Navbar/>
      {console.log('hello world', counter)}
      <h2>Welcome to my portfolio</h2>
    </div>
  );
}

export default App;
