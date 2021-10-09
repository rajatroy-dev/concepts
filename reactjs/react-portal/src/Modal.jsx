import ReactDom from "react-dom";

export default function Modal(props) {
    const el = document.getElementById("react-portal");

    return ReactDom.createPortal(
        props.children,
        el
    );
}