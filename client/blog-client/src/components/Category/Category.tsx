import React, {useState} from 'react';
import {ICategory} from "../../types/type";
import {useNavigate} from "react-router-dom";

interface ICategoryProps{
    category: ICategory;
}

export const Category = ({category}:ICategoryProps) => {

    const navigate = useNavigate();
    return (
        <ul onClick={()=>{navigate("/category/"+category.id)}}>
            {category.description}
        </ul>
    );
};