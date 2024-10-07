import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Structure } from "./components/Structure";
import { DetailsPage } from "./pages/DetailsPage";
import { CreatePage } from "./pages/CreatePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Structure />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="detail/:id" element={<DetailsPage />} />
          <Route path="detail/new" element={<CreatePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
