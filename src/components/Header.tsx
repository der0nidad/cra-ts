import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import * as React from "react";

export const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <div className="header-text">
        <Typography variant="h6">Симулятор авторизации</Typography>
      </div>
    </AppBar>
  );
};
