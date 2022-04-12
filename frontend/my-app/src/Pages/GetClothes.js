import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import ItemList from '../Components/ItemList';
import {LOAD_CLOTHES} from '../GraphQL/Queries';
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import './CategorieView.css';
import {useContext} from 'react'
import {Context} from "../Store"
import { currencyChange } from "../Store/actions";

function GetClothes(props){
    const {error, loading, data} = useQuery(LOAD_CLOTHES);


    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setIsLoadedItems]=useState([]);
    const [state, dispatch] = useContext(Context)
    console.log(state)

    useEffect(()=>{
        
        if(data){
            console.log(data);
            setIsLoadedItems(data.category.products);
            setIsLoading(false);
        }
        //console.log(loadedItems);

        
    },[data, state]);

    function itemSubmitHandler(number, data){
        if(number === 1){
            //console.log("Õnnestus");
            dispatch(currencyChange(data));
        }else{
            //console.log("Failed");
        }

    }

    if(isLoading == true){
        return(
        <div>
            Loading...
        </div>);
    }else{
            
            return(
                <div>
                <NavBar clothes={true} onCurrencyChange={itemSubmitHandler}/>
                <h1 >Clothes</h1>
                <div >
                    <ItemList items={loadedItems} currency={state.currency}/>

                    
                </div>
                </div>
            )
        
    }
}

export default GetClothes;