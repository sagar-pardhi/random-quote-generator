import { Routes, Route } from "react-router-dom";
import { QuotePage } from "./pages/quote";
import { AuthorPage } from "./pages/author";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="random-quote-generator" element={<QuotePage />} />
      <Route
        path="random-quote-generator/author/:authorName"
        element={<AuthorPage />}
      />
    </Routes>
  );
};
