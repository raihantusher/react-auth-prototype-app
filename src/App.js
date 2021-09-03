import logo from './logo.svg';
import './App.css';
import Signup from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div >
      <Signup />
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <UploadForm />
    </div>
  );
}

export default App;
