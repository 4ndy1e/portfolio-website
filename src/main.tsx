import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./About.tsx";
// import Home from "./Home.tsx";
import "@radix-ui/themes/styles.css";
import App from "./App.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
// ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
