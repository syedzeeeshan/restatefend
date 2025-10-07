import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Properties from "./Properties";
import PropertyDetail from "./PropertyDetails";
import PropertyForm from "./PropertyForm";
import Analytics from "./Analytics";
import AdminPanel from"./AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "properties", element: <Properties /> },
      { path: "properties/:id", element: <PropertyDetail /> },
      { path: "add-property", element: <PropertyForm /> },
      { path: "analytics", element: <Analytics /> },
      { path: "admin", element: <AdminPanel /> },
    ],
  },
]);

export default router;