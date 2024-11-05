import App from "./App";
import { creatBrowserRouter } from "react-router-dom";

const router = creatBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
