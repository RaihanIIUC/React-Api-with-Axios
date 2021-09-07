import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Loader from "./image-use";
import axios from "axios";
import { Button } from "@material-ui/core";
import { requestShirtList, setShirtList } from "../Redux/action/shirtLIstAction";
import { useDispatch , useSelector } from 'react-redux';
import styled from 'styled-components';


export const ShirtWrapper = styled(Grid)`
 img{
   height : 100px;
   width : auto;
   max-width : 100%;
   background-color : red;
 }
 p{
   font-size: 12px;
   text-align: center;
   padding : 10px 0;
   margin : 0;
   &.description {
     font-size: 8px;
     background-color: green;
   }
 }
 button{
   width: 100%;
   background-color : red;
   border-color : green;
   color: blue;
   &.material-button{
     background-color : #cdcdcd;
   }

 }

`;

const Buttn = styled.button`

`;
const ShirtList = () => {
  const [isFound , setIsFound ] = useState(false);
  const { shirtList } = useSelector((store) => store.listStore);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(true);
 
  useEffect(() => {
    dispatch(requestShirtList());
        setInterval(() => {
          setLoader(false);
        }, 2000);
  }, []);
console.log(shirtList);

  useEffect(() => {
    if (shirtList.length) {
      setIsFound(true);
    }
  }, [shirtList]);

  const ShirtDetails = (id) => {
    history.push(`/shirts/${id}`);
  };
 
  return loader ? (
    <Loader />
  ) : (
    <Grid container spacing={1} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={9} justifyContent={"center"}>
          Shirt List
        </Grid>
      </Grid>
      {!isFound && <p>No Shirt Found</p>}

      {shirtList.map((cart, index) => (
        <ShirtWrapper item md={4}>
          <img
            src={cart.image}
            style={{ width: "60%", height: "40%" }}
            alt={cart.title}
          />

          <ShirtWrapper md={9} justifyContent={"center"}>
            <p key={index}>{cart.title}</p>
            <p className="description">{cart.description}</p>
            <Button
              onClick={() => ShirtDetails(cart.id)}
              variant="outlined"
              color="primary"
            >
              see details
            </Button>
          </ShirtWrapper>
        </ShirtWrapper>
      ))}
    </Grid>
  );
};

export default ShirtList;
