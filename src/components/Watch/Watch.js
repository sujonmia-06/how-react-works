import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Tablet from '../Tablet/Tablet';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => setSteps(steps + 1);

    useEffect(() => {
        console.log(steps)
    }, [steps]);

    return (
        <div>
            <div style={{ border: '2px solid red', margin: '10px' }}>
                <h2>This is my Smart Watch</h2>
                <h3>My current steps: {steps}</h3>
                <button onClick={increaseSteps}>Dour...</button>
                <Display name="garmin" steps={steps}></Display>
                <Tablet></Tablet>
            </div>
        </div>
    );
};

export default Watch;