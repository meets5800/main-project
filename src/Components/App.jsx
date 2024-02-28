import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { AboutUs } from "./AboutUs";
import { SignIn } from "./SignIn";
import { OurFood } from "./OurFood";
import { createContext, useState } from "react";

export const abc = createContext();
export const xyz = createContext();

export const App = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <BrowserRouter basename={"/main-project/"}>
        <abc.Provider value={count}>
          <xyz.Provider value={handleAdd}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/ourfood" element={<OurFood />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
          </xyz.Provider>
        </abc.Provider>
      </BrowserRouter>
    </div>
  );
};
