import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_ALL} from '../GraphQL/Queries';
import {LOAD_TECH} from '../GraphQL/Queries';
import {LOAD_CLOTHES} from '../GraphQL/Queries';
import { Link } from "react-router-dom";
import ItemList from '../Components/ItemList';
import NavBar from '../Components/NavBar';
import './CategorieView.css';

function GetTech(props){
    const {error, loading, data} = useQuery(LOAD_TECH);


    const [isLoading, setIsLoading] = useState(false);
    const [loadedItems, setIsLoadedItems]=useState([]);

    useEffect(()=>{
        
        if(data){
            console.log(data);
            setIsLoadedItems(data.category.products);
            setIsLoading(false);
        }

        
    },[data]);

    if(isLoading == true){
        return(
        <div>
            Loading...
        </div>);
    }else{

            return(
                <div >
                <NavBar tech={true}/>
                <h1 >Tech products</h1>
                <div >
                    
                    <ItemList items={loadedItems} />
                    
                </div>
                </div>
        
            )

    }
}

export default GetTech;