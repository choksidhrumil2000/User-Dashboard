import './App.css';
import { UserDataProvider } from './Contexts/UserDataContext';
import MainPage from './Pages/MainPage/MainPage';
function App() {
  return (
    <UserDataProvider>
      <MainPage />
    </UserDataProvider>
  );
}

export default App;
