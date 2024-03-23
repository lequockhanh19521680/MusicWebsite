import axios from "axios";
import { domain } from "../config";

const baseURL = domain();
const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
const ResetToken = async () => {
  await axios
    .post(`${baseURL}/token/refresh`, {
      refresh_token: localStorage.getItem("RefreshToken"),
    })
    .then((response) => {
      localStorage.removeItem("AccessToken");
      localStorage.setItem("AccessToken", response.data.data.access_token);
      localStorage.removeItem("AccessTokenExpiry");
      localStorage.setItem(
        "AccessTokenExpiry",
        response.data.data.access_token_expiry
      );
      localStorage.removeItem("RefreshToken");
      localStorage.setItem("RefreshToken", response.data.data.refresh_token);
      localStorage.removeItem("RefreshTokenExpiry");
      localStorage.setItem(
        "RefreshTokenExpiry",
        response.data.data.refresh_token_expiry
      );
    });
};

axiosClient.interceptors.request.use(async (config) => {
  let accessToken = localStorage.getItem("AccessToken");

  if (accessToken) {
    const expire_access_token = parseInt(
      localStorage.getItem("AccessTokenExpiry")
    );
    const expire_refresh_token = parseInt(
      localStorage.getItem("RefreshTokenExpiry")
    );
    const now = Date.now() / 1000;
    if (now > expire_refresh_token) {
      console.log("Da het han refresh token");
      localStorage.clear();
      window.location.replace("/login");
    } else if (now > expire_access_token) {
      console.log("Da het han AccessToken");
      ResetToken();
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosClient;
