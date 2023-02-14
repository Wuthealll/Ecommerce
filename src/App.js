import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MyRouter from './routers/MyRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MyRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
