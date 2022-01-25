import React, { useEffect } from "react";

function Memoized(props) {
    useEffect(() => console.log("Rendered Memoized!"));

    return (
        <p>
            {props.memoizedNumber}
        </p>
    );
}

export default React.memo(Memoized);