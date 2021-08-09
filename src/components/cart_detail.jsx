import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Loader from "./image-use";

const CartDetails = () => {
  const [loader, setLoader] = useState(true);

  const [cartDetails, setcartDetails] = useState();

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

  console.log(cartDetails);

  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={12}>
          <p>Product Detail </p>
        </Grid>
      </Grid>
      <Grid item md={5}>
        {cartDetails && (
          <>
            <p>{cartDetails.title}</p>
            <p>{cartDetails.category}</p>

            <img
              src={cartDetails.image}
              style={{ width: "100%" }}
              alt={" it api "}
            />
            <p>{cartDetails.price}</p>
            <Button variant="outlined" color="primary">
              <Link to={`/cart_edit/${cartDetails.id}`}>Edit</Link>
            </Button>
            <Button variant="outlined" color="link">
              <Link to={`/cart_delete/${cartDetails.id}`}>Delete </Link>
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default CartDetails;
