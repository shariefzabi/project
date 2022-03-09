import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/header/app_header';
import LandingPage from './modules/landing_page/LandingPage';
import Aboutus from './modules/about_us/aboutus';
import Blog from './modules/blog/blogs';
import Blogform from './modules/addblogpage/blogform'

import Footer from './components/footer/footer';
import Blogtable from './modules/blog/blogs';
import Invoice1 from './modules/invoice/invoicetrial'
import Blogcontent from './modules/blogContentPage/blogContent/blogContent';
import ProductDetails from './modules/productDetailsPage/ProductDetails';
import Profile from './modules/profile/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="/aboutus" element={<Aboutus />}>
            </Route>
            <Route path="/blog" element={<Blogtable />}>
            </Route>
            <Route path="/addblogs" element={<Blogform />}>
            </Route>
            <Route path="/products" element={<ProductDetails />}>
            </Route>
            <Route path="/blogcontent" element={<Blogcontent/>}>
            </Route>
            <Route path="/profile" element={<Profile/>}>
            </Route>
          </Routes>
          {/* <Invoice1></Invoice1> */}
          <Footer />
        </div>
      </Router>
      {/* <Butcherypopup></Butcherypopup> */}
      {/* <BeanAgentPopup></BeanAgentPopup> */}
    </div>
  );
}


export default App;
