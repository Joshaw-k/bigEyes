import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import ConnectWallet from "./pages/ConnectWallet";
import WalletError from "./pages/WalletError";
import Initialization from "./pages/Initialization";
import ImportWallet from "./pages/ImportWallet";
import ValidationError from "./pages/ValidationError";
import ScrollToTop from "./components/ScrollToTop";
import ImportSuccess from "./pages/ImportSuccess";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
        <Route path="/initialization/:id" element={<Initialization />} />
        <Route path="/importwallet/:id" element={<ImportWallet />} />
        <Route path="/walleterror" element={<WalletError />} />
        <Route path="/validationerror" element={<ValidationError />} />
        <Route path="/importsuccess/:wallet" element={<ImportSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
