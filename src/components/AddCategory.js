import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue,setInputValue] = useState('')

    const handleInputChange=(e)=>{
        //toma el value de el elemento imput y lo agrega al hook useState
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        //Escucha el evento del submit del input y toma el array del hook para agregarle el valor del input que tiene el hook        
        if(inputValue.trim().length > 2){
            setCategories(cate=>[inputValue,...cate]);
            setInputValue('')
        }
    }

    return (
        //componente input 
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="add category"
            value={inputValue}
            onChange={(e)=>handleInputChange(e)}
            />
        </form>

        </>
    )
}
//El proptype obliga a usar el componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}