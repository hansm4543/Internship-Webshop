import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_CATEGORIES} from '../GraphQL/Queries';
import {LOAD_TECH} from '../GraphQL/Queries';
import { Link } from "react-router-dom";

function GetCategories(){

    const {error, loading, data} = useQuery(LOAD_CATEGORIES);
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        console.log(data);
        if(data){
            setCategories(data.categories);
        }
        
    },[data]);
    
    return(
        <div className="mainPage">
            {categories.map((val)=> {
                let variable = val.name + ".webp"
                //console.log(variable)
                return <div className="mainPageCategory">
                        <Link to={`${val.name}`}>
                            <h3>{val.name}</h3>
                        </Link>
                   </div>
            })}
        </div>
    );

}

export default GetCategories;