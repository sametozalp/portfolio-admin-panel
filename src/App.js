import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
