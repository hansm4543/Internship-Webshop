import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_ALL} from '../GraphQL/Queries';
import {LOAD_TECH} from '../GraphQL/Queries';
import {LOAD_CLOTHES} from '../GraphQL/Queries';
import { Link } from "react-router-dom";

function GetTech(props){
    const {error, loading, data} = useQuery(LOAD_TECH);


    const [isLoading, setIsLoading] = useState(false);
    const [loadedItems, setIsLoadedItems]=useState([]);

    useEffect(()=>{
        
        if(data){
            console.log(data);
            setIsLoadedItems(data.Category);
            setIsLoading(false);
        }

        
    },[data]);

    if(isLoading == true){
        return(
        <div>
            Loading...
        </div>);
    }else{
        if(props.tech == true){
            return(
            
                <div >
                    <h1 >Tech</h1>
                    
                </div>
        
            )
        }else{
            return(
            
                <div >
                    <h1 >Something went wrong</h1>
                </div>
        
            )
        }
    }
}

export default GetTech;