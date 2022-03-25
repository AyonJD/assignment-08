import './App.css';
import Shop from './Components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Qna from './Components/QNA/Qna';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Shop></Shop>
      <Qna></Qna>
    </div>
  );
}

export default App;
