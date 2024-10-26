import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home/Home";
import LoginSign from "./components/LoginSign";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/log" element={<LoginSign/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
