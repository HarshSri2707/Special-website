import { Routes, Route } from "react-router-dom";
import ValentinePage from "../component/ValentinePage";

export default function AppRoutes() {
  return (
    <Routes>
     

      {/* Valentine Surprise Route */}
      <Route path="/" element={<ValentinePage />} />

      {/* 404 */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}
