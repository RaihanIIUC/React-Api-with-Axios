import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Loader from "../components/image-use";
import axios from "axios";
import { Button } from "@material-ui/core";

const CartList = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setCartList(response.data);
        setInterval(() => {
          setLoader(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
  }, []);

  const CartDetails = (id) => {
    history.push(`/products/${id}`);
  };
  console.log(cartList, "===cartList");

  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={1} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={9} justifyContent={"center"}>
          Product List
        </Grid>
      </Grid>

      {cartList.map((cart, index) => (
        <Grid item md={4}>
          <img
            src={cart.image}
            style={{ width: "60%", height: "40%" }}
            alt={cart.title}
          />

          <Grid md={9} justifyContent={"center"}>
            <p key={index}>{cart.title}</p>
            <p>{cart.description}</p>
            <Button
              onClick={() => CartDetails(cart.id)}
              variant="outlined"
              color="primary"
            >
              see details
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CartList;
