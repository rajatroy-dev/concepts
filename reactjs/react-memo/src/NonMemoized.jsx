import { useEffect } from "react";

export default function NonMemoized(props) {
    useEffect(() => console.log("Rendered NonMemoized!"));

    return (
        <p>
            {props.memoizedNumber}
        </p>
    );
}