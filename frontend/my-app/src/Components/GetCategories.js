import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_CATEGORIES} from '../GraphQL/Queries';

function GetCategories(){

    const {error, loading, data} = useQuery(LOAD_CATEGORIES);
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        console.log(data);
        if(data){
            setUsers(data.categories);
        }
        
    },[data]);
    return(
        <div>
            {users.map((val)=> {
                return <h1>{val.name}</h1>;
            })}
        </div>
    );

}

export default GetCategories;