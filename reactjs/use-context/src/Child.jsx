import { useContext } from "react";
import UserContext from "./UserContext";

export default function Child() {
    const user = useContext(UserContext);

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <p>isUserLoggedIn: {`${user.isUserLoggedIn}`}</p>
            <p>Username: {user.username}</p>
        </div>
    );
}
