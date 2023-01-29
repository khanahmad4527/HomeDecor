import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./components/AllRoutes";
import { Navbar1 } from "./components/Navbar/Navbar";
import { Login } from "./redux/auth/auth.actions";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let id = localStorage.getItem("craftsVillaUser") || null;
    if (id) {
      dispatch(Login(id));
    }
  }, []);
  return (
    <div>
      <Navbar1 />
      <AllRoutes />
      <ScrollToTop
        smooth
        color="#902735"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "80px",
        }}
      />
    </div>
  );
}

export default App;
