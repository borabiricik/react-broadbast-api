import { BroadcastChannel } from "broadcast-channel";

export const authChannel = new BroadcastChannel("auth");

export const login = (navigate: Function) => {
  authChannel.postMessage({
    code: "LOGIN",
  });
  localStorage.setItem("token", "my_token");
  navigate(`/`);
};

export const logout = (navigate: Function) => {
  authChannel.postMessage({ code: "LOGOUT" });
  localStorage.removeItem("token");
  navigate(`/login`);
  //   authChannel.close();
};
