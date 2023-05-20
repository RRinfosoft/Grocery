import { Route, Routes } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Home2 from "./component/Home2/Home2";
import About from "./component/About/About";
import News from "./component/News/News";
import Contact from "./component/Contact/Contact";
import Shop from "./component/Shop/Shop";

function App() {
  return (
 <>
 <Header />
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home2" element={<Home2 />} />
  <Route path="/about" element={<About />} />
  <Route path="/news" element={<News />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/contact" element={<Contact />} />
 
 </Routes>
 <Footer />
 </>
  );
}

export default App;
