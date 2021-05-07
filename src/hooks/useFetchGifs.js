import { useState, useEffect } from 'react'
import { getGift } from '../helpers/GetGift';

export const useFetchGifs = (category) =>{

    const [state,setState] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
        //getGift();
        getGift(category)
            .then(imgs=>{

                    setState({
                        data: imgs,
                        loading:false
                    })       
        })
    },[category])


    return state
}