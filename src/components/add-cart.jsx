import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "../components/image-use";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";

const AddCart = () => {
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const [cart, setCart] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const AddCart = (e, key) => {
    setCart({ ...cart, [key]: e.target.value });
  };

  const requestAddCart = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        name: cart.name,
        description: cart.description,
        price: cart.price,
        category: cart.category,
        image: cart.image,
      })
      .then((response) => {
        console.log(response.data, "===responsed");
        history.push("/");
        setInterval(() => {
          setLoader(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error, "===errors ");
      });
  };

  return !loader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={6}>
          <p>Cart Add </p>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <div>
          <p>Cart Name </p>
          <TextField
            variant="outlined"
            value={cart.name}
            onChange={(e) => AddCart(e, "name")}
          />
        </div>
        <div>
          <p>Cart Description </p>
          <TextField
            variant="outlined"
            value={cart.description}
            onChange={(e) => AddCart(e, "description")}
          />
        </div>
        <div>
          <p>Cart Price </p>
          <TextField
            variant="outlined"
            value={cart.price}
            onChange={(e) => AddCart(e, "price")}
          />
        </div>
        <div>
          <p>Cart Category </p>
          <TextField
            variant="outlined"
            value={cart.category}
            onChange={(e) => AddCart(e, "category")}
          />
        </div>
        <div>
          <p>Cart Image </p>
          <TextField
            variant="outlined"
            value={cart.image}
            onChange={(e) => AddCart(e, "image")}
          />
        </div>
        <Button variant="outlined" color="secondary" onClick={requestAddCart}>
          Add Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddCart;
