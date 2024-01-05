import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
