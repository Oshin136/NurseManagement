import { LocalStorageKeys } from "../enums/localStorageKeys";

export const addUserLoginToLocalStorage = (
  isLoggedIn: string,
  accessToken: string,
  userId: string
) => {
  localStorage.setItem(LocalStorageKeys.isLoggedIn, isLoggedIn);
  localStorage.setItem(LocalStorageKeys.accessToken, accessToken);
  localStorage.setItem(LocalStorageKeys.userId, userId);
};

export const clearUserLoginFromLocalStorage = () => {
  localStorage.removeItem(LocalStorageKeys.isLoggedIn);
  localStorage.removeItem(LocalStorageKeys.accessToken);
  localStorage.removeItem(LocalStorageKeys.userId);
};

export const getUserLoginFromLocalStorage = () => {
  const isLoggedIn =
    localStorage.getItem(LocalStorageKeys.isLoggedIn) === "true" ? true : false;
  const accessToken = localStorage.getItem(LocalStorageKeys.accessToken);
  const userId = localStorage.getItem(LocalStorageKeys.userId);

  return {
    isLoggedIn,
    accessToken,
    userId,
  };
};

export const isUserLoggedIn = (): boolean => {
  const loggedInStatus = localStorage.getItem(LocalStorageKeys.isLoggedIn);
  if (loggedInStatus === null) {
    return false;
  } else {
    if (`${loggedInStatus}` === "true") {
      return true;
    } else {
      return false;
    }
  }
};
