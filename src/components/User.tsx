import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export const User = ({ match }: RouteComponentProps<TParams>) => {
  return <h2>This is a page for user with ID: {match.params.id} </h2>;
};
