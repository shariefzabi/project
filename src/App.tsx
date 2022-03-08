import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './components/header/app_header';
import LandingPage from './modules/landing_page/LandingPage';
import Aboutus from './modules/about_us/aboutus';
import Blog from './modules/blog/blogs';
import Blogform from './modules/addblogpage/blogform'

import Footer from './components/footer/footer';
// import Butcherypopup from './modules/butchery_form_page/form2';
import BeanAgentPopup from './modules/be an agent form copy/form1'
import Blogtable from './modules/blog/blogs';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage/>}>
            </Route>
            <Route path="/aboutus" element={<Aboutus/>}>
            </Route>
            <Route path="/blog" element={<Blogtable/>}>
            </Route>
            <Route path="/addblogs" element={<Blogform />}>
            </Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
      {/* <Butcherypopup></Butcherypopup> */}
      {/* <BeanAgentPopup></BeanAgentPopup> */}
    </div>
  );
}


export default App;
