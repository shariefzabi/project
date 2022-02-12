// import logo from './logo.svg';
import './App.css';
// import Home from './modules/home/Home';
// // import Dashboard from './modules/dashboard/dashboard';
// import LandingPage from './modules/home/components/LandingPage';
import Header from './modules/dashboard/components/header/Header';
import Quicklinks from './modules/dashboard/components/overview/quicklinks/quicklinks';
import Sidebar from './modules/dashboard/components/sidebar/sidebar';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <LandingPage/> */}
      {/* <Dashboard /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Sidebar />
      <Quicklinks />
    </div>
  );
}


export default App;
