// import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GitItem } from "./GitItem";

export const GifGrid = ({ category }) => {
 
    const { images, isLoading } = useFetchGifs( category );


  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Loading...</h2> )
      }

      <div className="card-grid">
        {
            images.map(( image ) => (
            <GitItem 
                key={ image.id }
                { ...image }
            />
        ))}
      </div>

    </>
  );
};
