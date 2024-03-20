import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home, About, Contact, User, Github } from "./components/index.jsx";
import { githubInfoLoader } from "./components/Github/Github.jsx";

// One Way To Declare Router
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "/about",
//                 element: <About />,
//             },
//             {
//                 path: "/contact",
//                 element: <About />,
//             },
//             {
//                 path: "/github",
//                 element: <About />,
//             },
//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:userid" element={<User />} />
            <Route
                loader={githubInfoLoader} // it is for optimisation purpose
                path="/github"
                element={<Github />}
            />
        </Route>
    ),
    createRoutesFromElements(<Route path="/about" element={<About />} />)
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// Doubt
// mujhe ek page aisa chaiye jisme header footer nahi ho
// sirf uska content ho
// means about wala page mujhe layout ke ander nahi chahiye
// then how should i do it.
