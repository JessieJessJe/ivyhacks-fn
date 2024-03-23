import './App.css';
import Example from './components/header';
import Input from './components/input';

function App() {
  return (
    <div className='App'>
      <Example />
      <Input />
      <div class='card-container'>
        <div class='card'>
          <div class='card-front'>Quote from a famous person</div>
          <div class='card-back'>Explanation or context of the quote</div>
        </div>
      </div>
    </div>
  );
}

export default App;
