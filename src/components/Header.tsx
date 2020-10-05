import { Button, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import * as React from "react";
type Props = {};
export const Header: React.FC<Props> = ({}: Props) => {
  return (
    <AppBar position="static">
      <Typography variant="h6">News</Typography>
      <Button color="inherit">Login</Button>
    </AppBar>
  );
};
