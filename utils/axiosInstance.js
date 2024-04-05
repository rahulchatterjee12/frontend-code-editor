import axios from "axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { setTokens, getTokens, clearTokens } from "./tokens";
import { Mutex } from "async-mutex";
import BASE_URL from "./constants/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Ignore-Cookie": true,
  },
  withCredentials: false,
});

const mutex = new Mutex();
axiosInstance.interceptors.request.use(async (config) => {
  await mutex.waitForUnlock();

  let tokens = getTokens();

  if (tokens.access && tokens.refresh) {
    const tokenData = jwt_decode(tokens.access);
    const isExpired = moment(new Date()) > moment.unix(tokenData.exp);

    if (isExpired) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const response = await axios.post(
            `${BASE_URL}/users/reauth`,
            JSON.stringify({
              refreshTkn: tokens.refresh,
              accessTkn: tokens.access,
            }),
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              withCredentials: false,
            }
          );

          tokens = setTokens(response.data.access, response.data.refresh);
        } catch (error) {
          if (error.response && error.response.status === 401) clearTokens();
          tokens = getTokens();
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        tokens = getTokens();
      }
    }
  }

  // Finally set the authorization header
  config.headers.Authorization = tokens.access
    ? `Bearer ${tokens.access}`
    : null;

  return config;
});

export default axiosInstance;
