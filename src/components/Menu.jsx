import {
  Button,
 
  Toolbar,
  Typography,
  IconButton,
  AppBar,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";



const MenuBar = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to="/">Shirt List</Link>
          </Typography>
          <Button>
            <Link to="/shirt_add">Shirt Add</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuBar;
