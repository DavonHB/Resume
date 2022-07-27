import './App.scss';
import Hero from './components/hero';
import Left from './components/left';
import Right from './components/right';

function App() {
  return (
    <>
      <Hero />
      <div className='content-container'>
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
