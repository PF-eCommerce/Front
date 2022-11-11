import React from "react";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import {getAllProducts} from "../../redux/actions/productsAction"




  const Landing = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(getAllProducts())
  },[])
     return <div>Landing</div>

      };

export default Landing;
