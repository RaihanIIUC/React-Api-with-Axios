import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Loader from "./image-use";
import { requestShirtDelete } from "../Redux/action/ShirtDeleteAction ";
import { useDispatch } from "react-redux";

const DeleteShirt = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestShirtDelete(id));
    history.push('/');
        setInterval(() => {
          setLoader(false);
        }, 2000);
  });

  return loader ? <Loader /> : <></>;
};

export default DeleteShirt;
