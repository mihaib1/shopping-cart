import { useEffect, useState, useContext } from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";

export default function Products(){
    let [productsList, setProductsList] = useState([]);
    let [waiting, setWaiting] = useState(true);


    async function getProducts(){
        const productsUrl = "https://fakestoreapi.com/products/";
        let fetchProducts = await fetch(productsUrl);
        if(!fetchProducts.ok){
            throw new Error("HTTP Error: Status " + fetchProducts.status);
        }
        let products = await fetchProducts.json();
        setWaiting(false);
        setProductsList(products);
    }

    useEffect(() => {
        getProducts();
    }, [])

    

    return(
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="page-title">Products</h1>
                <div className="cards-container">
                    {
                        waiting ? <h1>Waiting...</h1> : productsList.map((item) => 
                        {return <Card key={item.id} id={item.id} name={item.title} price={item.price} image={item.image}></Card>}) 
                    }
                </div>
            </div>
            
            
        </>
    )
}