import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categories = ['One Punch','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories,'Seven Deadly Sins']);
    // }

    return (
      <>
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        
        <ol>
            {
                categories.map( ( category ) =>
                    <GifGrid key={category} category={category}/>
                )
            }
        </ol>

      </>
  )
};
