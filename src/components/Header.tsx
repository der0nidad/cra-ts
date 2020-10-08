import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import * as React from "react";
type Props = {};
export const Header: React.FC<Props> = ({}: Props) => {
  return (
    <AppBar position="static">
      <div className="header-text">
        <Typography variant="h6">Симулятор авторизации</Typography>
      </div>
      {/* <Button color="inherit">Login</Button> */}
    </AppBar>
  );
};
