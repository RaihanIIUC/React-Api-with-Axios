import { useEffect, useState } from "react";
import "./App.css";
import CartDetail from "./components/cart_detail";
import CartList from "./components/cart_page";
import Loader from "./components/image-use";
import { useHistory } from "react-router";

import { Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
} from "@material-ui/core";
import AddCart from "./components/add-cart";
import DeleteCart from "./components/cart_delete";
import EditCart from "./components/edit_cart";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  const [loader, setLoader] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, [loader]);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              <Link to="/">Cart List</Link>
            </Typography>
            <Button>
              <Link to="/cart_add">Cart Add</Link>
            </Button>
          </Toolbar>
        </AppBar>

        <Grid item md={12}>
          <Switch>
            <Route exact path="/">
              <CartList />
            </Route>
            <Route path="/cart_add">
              <AddCart />
            </Route>
            <Route exact path="/products/:id">
              <CartDetail />
            </Route>
            <Route path="/cart_edit/:id">
              <EditCart />
            </Route>
            <Route path="/cart_delete/:id">
              <DeleteCart />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
