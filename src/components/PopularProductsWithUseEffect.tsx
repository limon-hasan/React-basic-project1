import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { IPopularProduct } from "../types";
import PopularProductCard from "./PopularProductCard";

interface IPopularProductWithUseEffectProps {
    setCart : Dispatch<SetStateAction<IPopularProduct[]>>;
    cart : IPopularProduct[];
}
const PopularProductsWithUseEffect = ({cart, setCart} : IPopularProductWithUseEffectProps) => {
    
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(true);   // for handling Suspense Fallback Loading for useEffect 
    const [error, setError] = useState("")
    useEffect(() => {
        console.log("Use effect triggered...");
        
        // const fetchData = async() : Promise<void> => {
        //     const response = await fetch("/popular-products.json")
        //     const data = await response.json();
        //     //   return data;
        //     // console.log(data);
        //     setPopularProducts(data);
        //     setLoading(true);
        // }
        // console.log(userFetch(), "userfetch");
        // fetchData();

        fetch("/popular-products.json") 
        .then(res => res.json())
        .then(data => {
            setPopularProducts(data)
            setLoading(false);
        })
        .catch(e => {
            console.log(e);
            setError(e);
        }) 

    }, [])

    console.log(popularProducts, "Popular products ");

    return (
        <div className='my-[80px] container mx-auto'>
            <h2 className='text-3xl font-bold mb-4 text-[#179800]'>
                Popular Products with Use effect
            </h2>

            {loading ? <p className="font-bold text-5xl text-center">Use Effect Loading</p> : error ? "Something is wrong" : <div className='grid grid-cols-4 gap-4'>
                {
                    popularProducts.map((product) => {
                    console.log(product, "prooo")
                        return(
                            <PopularProductCard product = {product} 
                            cart = {cart} setCart={setCart}></PopularProductCard>
                        )       
                    })
                }
            </div>}
        </div>
    );
};

export default PopularProductsWithUseEffect;