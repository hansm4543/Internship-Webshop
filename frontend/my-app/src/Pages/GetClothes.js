import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import ItemList from '../Components/ItemList';
import {LOAD_CLOTHES} from '../GraphQL/Queries';
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import './CategorieView.css';

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
            
            return(
                <div>
                <NavBar clothes={true}/>
                <h1 >Clothes</h1>
                <div >
                    <ItemList items={loadedItems} />

                    
                </div>
                </div>
            )
        
    }
}

export default GetClothes;