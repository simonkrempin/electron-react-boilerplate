import { createRoot } from "react-dom/client";
import * as React from "react";

const render = () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<HelloMessage />);
};

const HelloMessage = (): React.ReactElement => {
    return (
        <>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
        </>
    );
};

render();
