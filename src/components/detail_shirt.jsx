import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Loader from "./image-use";
import { useDispatch, useSelector } from "react-redux";
 import {
   requestShirtDetail,
   setCurrrentShirtList,
 } from "../Redux/action/ShirtDetailAction";

const ShirtDetails = () => {
    const dispatch = useDispatch();
   const [loader, setLoader] = useState(true);
  const { currentShirt } = useSelector((store) => store.detailStore);
  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
        dispatch(requestShirtDetail(id));
          setInterval(() => {
            setLoader(false);
            setFound(true);
          }, 2000);
  }, []);

  const shirt = currentShirt;
  console.log(shirt,"===hello");

  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={12}>
          <p>Shirt Detail </p>
        </Grid>
      </Grid>
      <Grid item md={5}>
        {found && (
          <>
            <p>{shirt.title}</p>
            <p>{shirt.category}</p>

            <img src={shirt.image} style={{ width: "100%" }} alt={" it api "} />
            <p>{shirt.price}</p>
            <Button variant="outlined" color="primary">
              <Link to={`/shirt_edit/${shirt.id}`}>Edit</Link>
            </Button>
            <Button variant="outlined" color="link">
              <Link to={`/shirt_delete/${shirt.id}`}>Delete </Link>
            </Button>
          </>
        )}
      </Grid>
      
    </Grid>
  );
};

export default ShirtDetails;
