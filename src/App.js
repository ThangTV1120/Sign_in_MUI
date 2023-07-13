import './App.css';
import Sign_in from './components/Sign_in';
// import Button from '@mui/material/Button';
import Toasts from './common/Toast';
function App() {
  return (
    <>
      {/* <Button variant="contained">Hello World</Button> */}
      <Sign_in></Sign_in>
      <Toasts />
    </>
  );
}

export default App;
