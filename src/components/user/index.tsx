import Button from "@components/buttons/Button";
import { logout } from "@utils/broadcast-channels/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !!!localStorage.getItem("token") && navigate("/login");
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <span className="dark:text-white">Logged In</span>
      <Button onClick={() => logout(navigate)}>Logout</Button>
    </div>
  );
};

export default UserPage;
