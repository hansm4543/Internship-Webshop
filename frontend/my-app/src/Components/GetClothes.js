import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import ItemList from '../Components/ItemList';
import {LOAD_CLOTHES} from '../GraphQL/Queries';
import { Link } from "react-router-dom";

function GetClothes(props){
    const {error, loading, data} = useQuery(LOAD_CLOTHES);


    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setIsLoadedItems]=useState([]);

    useEffect(()=>{
        
        if(data){
            console.log(data);
            setIsLoadedItems(data.category.products);
            setIsLoading(false);
        }
        console.log(loadedItems);

        
    },[data]);

    if(isLoading == true){
        return(
        <div>
            Loading...
        </div>);
    }else{
        if(props.clothes == true){
            
            return(
            
                <div >
                    <ItemList items={loadedItems} />

                    
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

export default GetClothes;