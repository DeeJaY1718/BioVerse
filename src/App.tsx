import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

/**
 * App entry point. Currently a single-page experience, but wired with
 * React Router so future pages (student portal, AI assistant, etc.)
 * can be added without restructuring.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
