import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";


function Cats() {
  const dispatch = useDispatch();
  const catPics = useSelector((state) => state.entities)
  const loading = useSelector((state) => state.status)
  console.log(loading)

  
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  
  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics= { catPics } />
    </div>
  );
}

export default Cats;
