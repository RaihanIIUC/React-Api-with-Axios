import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";
import Loader from "../components/image-use";
const EditCart = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [cartDetails, setcartDetails] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setcartDetails(response.data);
        setInterval(() => {
          setLoader(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
  }, []);

  const EditCart = (e, key) => {
    setcartDetails({ ...cartDetails, id: id, [key]: e.target.value });
  };

  const requestEditCart = () => {
    axios
      .put(`https://fakestoreapi.com/products/${id}`, {
        title: cartDetails.title,
        description: cartDetails.description,
        price: cartDetails.price,
        category: cartDetails.category,
        image: cartDetails.image,
      })
      .then((response) => {
        console.log(response.data, "===responsed");
        history.push(`/products/${id}`);
      })
      .catch((error) => {
        console.log(error, "===errors ");
      });
  };

  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={6}>
          <p>Cart Edit </p>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off">
        <Grid item md={12}>
          <div>
            <p>Cart Title </p>
            <TextField
              variant="outlined"
              value={cartDetails.title}
              onChange={(e) => EditCart(e, "title")}
            />
          </div>
          <div>
            <p>Cart Description </p>
            <TextField
              variant="outlined"
              value={cartDetails.description}
              onChange={(e) => EditCart(e, "description")}
            />
          </div>
          <div>
            <p>Cart Price </p>
            <TextField
              variant="outlined"
              value={cartDetails.price}
              onChange={(e) => EditCart(e, "price")}
            />
          </div>
          <div>
            <p>Cart Category </p>
            <TextField
              variant="outlined"
              value={cartDetails.category}
              onChange={(e) => EditCart(e, "category")}
            />
          </div>
          <div>
            <p>Cart Image </p>
            <TextField
              variant="outlined"
              value={cartDetails.image}
              onChange={(e) => EditCart(e, "image")}
            />
          </div>
          <Button onClick={requestEditCart} variant="outlined" color="primary">
            Add Cart{" "}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default EditCart;
