import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/header/app_header';
import LandingPage from './modules/landing_page/LandingPage';
import Aboutus from './modules/about_us/aboutus';
import Blog from './modules/blog/blogs';
import Blogform from './modules/addblogpage/blogform';
import AddProducts from './modules/addProducts_page/product';
import Footer from './components/footer/footer';
import Blogtable from './modules/blog/blogs';
import Invoice from './modules/invoice/invoice'
import Blogcontent from './modules/blogContentPage/blogContent/blogContent';
import ProductDetails from './modules/productDetailsPage/ProductDetails';
import SelectedProductDetails from './modules/productDetailsPage/selectedProductPage';
import Profile from './modules/profile/Profile';
import Orders from './modules/orders/orders';
// import Popup from './modules/shopping_cart/cartpopup/popup';
// import Shoppingcart from "./modules/shopping_cart/shoppingcart";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Routes>

            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
            <Route path="/blog" element={<Blogtable />}></Route>
            <Route path="/addblogs" element={<Blogform />}></Route>
            <Route path="/addproducts" element={<AddProducts />}></Route>
            <Route path="/products" element={<ProductDetails />}></Route>
            <Route path="/blogcontent" element={<Blogcontent />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/invoice" element={<Invoice />}></Route>
            <Route path="/selectedProduct" element={<SelectedProductDetails />}></Route>

          </Routes>
          <Footer />
          {/* <Routes>
            <Route path="/" element={<Popup />}></Route>
            <Route path="/shoppingcart" element={<Shoppingcart />}></Route>

          </Routes> */}
        </div>
      </Router>
      {/* <Butcherypopup></Butcherypopup> */}
      {/* <BeanAgentPopup></BeanAgentPopup> */}
    </div>
  );
}


export default App;
