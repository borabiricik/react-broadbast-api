import { BroadcastChannel } from "broadcast-channel";

export const themeChannel = new BroadcastChannel("theme");

export const toggleTheme = (isDarkTheme: boolean) => {
  themeChannel.postMessage({ isDarkTheme: !isDarkTheme });
};
