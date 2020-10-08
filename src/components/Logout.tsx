import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { logoutUserAction } from "../store/actionCreators";

type Props = {};

export const Logout: React.FC<Props> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  let history = useHistory();
  useEffect(() => {
    dispatch(logoutUserAction());
    history.push("/login");
  });

  return <div></div>;
};
