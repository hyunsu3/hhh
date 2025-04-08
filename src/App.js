import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
// import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("로그인상태:", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
