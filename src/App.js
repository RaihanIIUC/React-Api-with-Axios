import { useEffect, useState } from "react";
import "./App.css";
import ShirtDetail from "./components/detail_shirt";
import ShirtList from "./components/shirt_list";
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
import AddShirt from "./components/shirt_add";
import DeleteShirt from "./components/delete_shirt";
import EditShirt from "./components/edit_shirt";
import MenuBar from "./components/Menu";

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
        <MenuBar />

        <Grid item md={12}>
          <Switch>


            <Route exact path="/">
              <ShirtList />
            </Route>
            <Route path="/shirt_add">
              <AddShirt />
            </Route>
            <Route exact path="/shirts/:id">
              <ShirtDetail />
            </Route>
            <Route path="/shirt_edit/:id">
              <EditShirt />
            </Route>
            <Route path="/shirt_delete/:id">
              <DeleteShirt />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
