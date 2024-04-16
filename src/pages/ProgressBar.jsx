import React, { useState, useEffect } from "react";
import "./../css-modules/ProgressBar.css";
import BackToMain from "../components/BackToMain";

const ProgressBar = ({ percentage }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (width < percentage) {
                setWidth((w) => w + 1);
            }
        }, 10);

        return () => {
            clearInterval(timer);
        };
    }, [percentage]);

    return <>
        <BackToMain />
        <p>»»Write a React.js component that draws a smoothly animated progress bar.Sure, here's an example React.js component that creates a smoothly animated progress bar:</p>
        <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${width}%` }} />
        </div>
        <div>
            <p>In this example, the ProgressBar component takes in a percentage prop which determines how much of the progress bar should be filled.</p>
            <p>The component uses the useState and useEffect hooks to animate the progress bar smoothly. The width state variable is used to track the current width of the progress bar, and the setInterval function is used to increment the width gradually over time until it matches the desired percentage.</p>
            <p>The return statement of the component contains the HTML for the progress bar, with a container div and a fill div. The fill div's width is set dynamically using inline styles based on the width state variable.</p>
            <p>Finally, the component is exported as a default export so it can be used in other parts of the app. Note that this example assumes that a CSS file named ProgressBar.css exists and contains styling for the progress bar.</p>
        </div>
    </>
}

export default ProgressBar;

