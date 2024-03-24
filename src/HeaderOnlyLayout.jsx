// HeaderOnlyLayout.jsx
import React from "react";
import Header from "./components/Header/Header"; // Assuming this is the path to your Header component

const HeaderOnlyLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default HeaderOnlyLayout;
