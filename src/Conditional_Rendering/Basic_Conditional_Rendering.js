import React from "react";

const ConditionalGreet = () => {
    const currentTime = new Date().getHours();

    return ( 
        <div>
            {currentTime < 12 ? <p>Good Morning!</p> : <p>Good Afternoon!</p> }
        </div>
 )
};

export default ConditionalGreet;
