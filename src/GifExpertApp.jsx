import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        // console.log( newCategory );

        if ( categories.includes (newCategory)) return;
        // falta validar si ingresa mayusculas y minusculas lo mismo

        setCategories([ newCategory, ...categories ]);
    };

  return (
    <>
        {/* titulo */}
        
        <h1>Gif's Finder!!!</h1>

        {/* input */}

        <AddCategory 
        // setCategories={ setCategories }
            onNewCategory= { value => onAddCategory( value )}
        />

        {/* listado */}   

        { categories.map( category => (
            <GifGrid 
                key={ category }
                category={ category }
            />
        )) 
        }
    </>
  )
}
