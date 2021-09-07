import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loader from "./image-use";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";

const AddShirt = () => {
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const [shirt, setShirt] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const Addshirt = (e, key) => {
    setShirt({ ...shirt, [key]: e.target.value });
  };

  const requestAddshirt = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        name: shirt.name,
        description: shirt.description,
        price: shirt.price,
        category: shirt.category,
        image: shirt.image,
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
        <Grid item mdf={6}>
          <p>shirt Add </p>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <div>
          <p>shirt Name </p>
          <TextField
            variant="outlined"
            value={shirt.name}
            onChange={(e) => Addshirt(e, "name")}
          />
        </div>
        <div>
          <p>shirt Description </p>
          <TextField
            variant="outlined"
            value={shirt.description}
            onChange={(e) => Addshirt(e, "description")}
          />
        </div>
        <div>
          <p>shirt Price </p>
          <TextField
            variant="outlined"
            value={shirt.price}
            onChange={(e) => Addshirt(e, "price")}
          />
        </div>
        <div>
          <p>shirt Category </p>
          <TextField
            variant="outlined"
            value={shirt.category}
            onChange={(e) => Addshirt(e, "category")}
          />
        </div>
        <div>
          <p>shirt Image </p>
          <TextField
            variant="outlined"
            value={shirt.image}
            onChange={(e) => Addshirt(e, "image")}
          />
        </div>
        <Button variant="outlined" color="secondary" onClick={requestAddshirt}>
          Add shirt
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddShirt;
