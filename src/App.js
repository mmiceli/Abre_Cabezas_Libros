//import logo from './logo.svg';

import './App.scss';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div >
      <Header/>
      <Main/>
      <footer/>
    </div>
  );
}

export default App;
