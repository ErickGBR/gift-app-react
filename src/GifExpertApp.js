import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid} from './components/GifGrid'

export const GifExpertApp=()=>{

    //const categorias = ['one punch','Samurai X','DragonBall']

    
    const [categorias, setCategories] = useState(['DragonBall'])
    /*
    const handleAdd=()=>{
        setCategories([...categorias, 'HunterXHunter'])
    }*/
    
    
    return (
        //llamada a componente que escribe la busqueda
        <>
            <h2> Gif Service </h2>
                <AddCategory setCategories={ setCategories }/>
            <hr/>
            
            <ol>
                { 
                //llamada a componente que muestra los resultados  
                categorias.map(category=>(
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