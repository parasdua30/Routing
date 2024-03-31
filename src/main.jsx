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
import HeaderOnlyLayout from "./HeaderOnlyLayout.jsx";
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
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:userid" element={<User />} />
            </Route>
            <Route
                loader={githubInfoLoader} // it is for optimisation purpose
                path="/github"
                element={<Github />}
            />
            <Route
                path="/about"
                element={
                    <HeaderOnlyLayout>
                        <About />
                    </HeaderOnlyLayout>
                }
            />
        </Route>
    )
);

// Playing with Router
const router2 = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:userid" element={<User />} />
            </Route>
            <Route
                loader={githubInfoLoader} // it is for optimisation purpose
                path="/github"
                element={<Github />}
            />
            <Route
                path="/about"
                element={
                    <HeaderOnlyLayout>
                        <About />
                    </HeaderOnlyLayout>
                }
            />
        </Route>
    )
);

/*
    const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:userid" element={<User />} />
            <Route
                loader={githubInfoLoader} // it is for optimisation purpose
                path="/github"
                element={<Github />}
            />
        </Route>
    )
);
    
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div>yoyo honey singh</div>
        <RouterProvider router={router} />
        <div>yoyo honey singh</div>
        <RouterProvider router={router2} />
    </React.StrictMode>
);

// Doubt
// mujhe ek page aisa chaiye jisme header footer nahi ho
// sirf uska content ho
// means about wala page mujhe layout ke ander nahi chahiye
// then how should i do it.
