import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import RegisterEvent from "./pages/RegisterEvent";
function App() {
  return (
    <>
      <div className="todo">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/register/event" element={<RegisterEvent />}></Route>
              {/* <Route path="/profile" element={<Profile />}></Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
