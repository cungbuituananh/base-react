import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE, setDataSession } from "../helpers/session";

export interface LoginForm {
  username: string;
  password: string;
}

export const AUTH_BASE_URL = process.env.REACT_APP_GATE_WAY_ENDPOINT;

export const useLogin = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const getAccountInfo = async () => {
  //   const userDetail = await getUserData();
  //   setUserSession(userDetail?.data?.data);
  // };
  const loginAccount = async (dataLogin: LoginForm) => {
    try {
      setLoading(true);
      const requestBody = {
        username: dataLogin?.username,
        password: dataLogin?.password,
        grant_type: "password",
      };
      console.log("requestBody: ", requestBody);
      // const loginDetail = await loginAxios(requestBody);
      // const { data } = loginDetail;
      // setCmsToken(data?.data);
      setDataSession(LOCAL_STORAGE, "isLogin", true);
      // await getAccountInfo();
      navigate("/");
      setLoading(false);
    } catch (err) {
      // errorMsg(err, "Có lỗi");
      // dispatch(setCurrentBizzApp(undefined));
      // localStorage.clear();
      // sessionStorage.clear();
      // setLoading(false);
    }
  };
  const logoutAccount = () => {
    setDataSession(LOCAL_STORAGE, "isLogin", false);
    //   dispatch(setCurrentMenuApp([]));
    //   removeCmsToken();
    //   store.clearAll();
    navigate("/login");
  };
  return { loginAccount, logoutAccount, loading };
};
