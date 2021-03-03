import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    //const handleAdd = () => {
        //setCategories([...categories, 'HunterXHunter']); agregando de ultimo en el array
        //setCategories(['HunterXHunter', ...categories]); agregando de primero en el array
        //setCategories(cats => [...cats, 'HunterXHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            
            <ol>
                { 
                    categories.map(category => (
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
