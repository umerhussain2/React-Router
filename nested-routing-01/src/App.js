import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages Components
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
// Components that we show want to all pages
import Layout from "./layout/Layout";
import ErrorPage from "./routes/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
