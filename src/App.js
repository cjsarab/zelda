import './App.css';
import MainContainer from "./containers/MainContainer";
import TitleBanner from './components/TitleBanner';

function App() {
  return (
    <div className="app">
          <TitleBanner />
          <MainContainer/>
    </div>
  );
}

export default App;
