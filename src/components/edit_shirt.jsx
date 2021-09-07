import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";
import Loader from "./image-use";
import { useDispatch, useSelector } from "react-redux";
import {
  requestShirtDetail,
  setCurrrentShirtList,
} from "../Redux/action/ShirtDetailAction";
const EditShirt = () => {

  const history = useHistory();
    const [found, setFound] = useState(false);
  const dispatch = useDispatch();
  
  const [loader, setLoader] = useState(true);
    const { currentShirt } = useSelector((store) => store.detailStore);

  const [ShirtDetails, setShirtDetails] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { id } = useParams();


  useEffect(() => { 
      dispatch(requestShirtDetail(id));
    setFound(true);
    setInterval(() => {
      setLoader(false);
    }, 2000);
  }, []);


  const EditShirt = (e, key) => {
       setShirtDetails({ ...currentShirt, id: id, [key]: e.target.value });
  };

  const requestEditShirt = () => {
    dispatch(setCurrrentShirtList(ShirtDetails , id ));
        history.push(`/shirts/${id}`);
  };

  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={6}>
          <p>Shirt Edit </p>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off">
        <Grid item md={12}>
          <div>
            <p>Cart Title </p>
            <TextField
              variant="outlined"
              value={ShirtDetails.title}
              onChange={(e) => EditShirt(e, "title")}
              //  onChange={setFormValue}
            />
          </div>
          <div>
            <p>Cart Description </p>
            <TextField
              variant="outlined"
              value={ShirtDetails.description}
              onChange={(e) => EditShirt(e, "description")}
            />
          </div>
          <div>
            <p>Cart Price </p>
            <TextField
              variant="outlined"
              value={ShirtDetails.price}
              onChange={(e) => EditShirt(e, "price")}
            />
          </div>
          <div>
            <p>Cart Category </p>
            <TextField
              variant="outlined"
              value={ShirtDetails.category}
              onChange={(e) => EditShirt(e, "category")}
            />
          </div>
          <div>
            <p>Cart Image </p>
            <TextField
              variant="outlined"
              value={ShirtDetails.image}
              onChange={(e) => EditShirt(e, "image")}
            />
          </div>
          <Button onClick={requestEditShirt} variant="outlined" color="primary">
            Add Cart
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default EditShirt;
