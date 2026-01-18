import "./Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Mainpage,
  COC,
  COCApplication,
  CocAcademic,
  UMC,
  UMCApplication,
  UMCAcademic,
  RedDeer,
  RedDeerApplication,
  QandA,
  Seniors,
  UsVisa,
  CaVisa,
  CocLife,
  CanadaLife,
  AboutUs
} from "./pages";
import { Header, Footer,ScrollToTop } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/COC" element={<COC />} />
          <Route path="/COCApplication" element={<COCApplication />} />
          <Route path="/UMC" element={<UMC />} />
          <Route path="/UMCApplication" element={<UMCApplication />} />
          <Route path="/UMCAcademic" element={<UMCAcademic />} />
          <Route path="/RedDeer" element={<RedDeer />} />
          <Route path="/RedDeerApplication" element={<RedDeerApplication />} />
          <Route path="/QandA" element={<QandA />} />
          <Route path="/Seniors" element={<Seniors />} />
          <Route path="/UsVisa" element={<UsVisa />} />
          <Route path="/CocAcademic" element={<CocAcademic />} />
          <Route path="/CocLife" element={<CocLife />} />
          <Route path="/CanadaVisa" element={<CaVisa />} />
          <Route path="/CanadaLife" element={<CanadaLife />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
