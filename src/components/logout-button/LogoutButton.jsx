import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function LogoutButton({ children }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function logOut() {
    setUser(null);
    navigate("/login", { replace: true });
    localStorage.removeItem("user");
  }

  return (
    <button onClick={logOut} style={{ borderColor: "currentcolor" }}>
      {children}
    </button>
  );
}
