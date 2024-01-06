import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
