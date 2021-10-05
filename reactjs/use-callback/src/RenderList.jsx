import { useEffect, useState } from "react"

const RenderList = ({ threeItems, style }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("RenderList"); // If we useCallback then this line will not be re-rendered if there is no change in threeItems
        setItems(threeItems());
    }, [threeItems]);

    return (
        <div style={style}>
            {items.map((item, index) => <p key={index}>{item}</p>)}
        </div>
    );
}

export default RenderList;