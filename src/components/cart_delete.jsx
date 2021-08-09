import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Loader from "../components/image-use";

const DeleteCart = () => {
  const [loader, setLoader] = useState(true);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        history.push("/");
        setInterval(() => {
          setLoader(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
  });

  return loader ? <Loader /> : <></>;
};

export default DeleteCart;
