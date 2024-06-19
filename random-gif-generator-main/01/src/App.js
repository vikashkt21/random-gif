
import './App.css';
import Random from './Component/Random';
import Tag from './Component/Tag';

function App() {
  return (
    <div className="App">
     
    <h1 className='head'>Random gif</h1> 
     
     <div className='box'>
      <Random/>
      <Tag/>
      </div>
    </div>
  );
}

export default App;
