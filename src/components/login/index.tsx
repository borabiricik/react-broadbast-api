import Button from "@components/buttons/Button";
import { login } from "@utils/broadcast-channels/auth";

import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState<string>("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setemail(e.target.value);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <label>Email</label>
        <input
          className="border-2 rounded-md"
          type="text"
          value={email}
          onChange={handleChange}
        />
      </div>
      <Button onClick={() => login(navigate)}>Login</Button>
    </>
  );
};

export default Login;
