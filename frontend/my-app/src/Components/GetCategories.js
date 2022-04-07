import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_CATEGORIES} from '../GraphQL/Queries';
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
        <div>
            {categories.map((val)=> {
                return <div>
                    <Link to={`${val.name}`}>
                        <p>{val.name}</p>
                    </Link>
                   </div>
            })}
        </div>
    );

}

export default GetCategories;