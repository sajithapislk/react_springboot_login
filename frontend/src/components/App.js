import logo from '../logo.svg';
import './App.css';

import Header from './Header';
import AppContent from './AppContent';
import AuthContent from './AuthContent';

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AuthContent />
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
