import { use, type Dispatch, type SetStateAction } from "react";
import type { IPopularProduct } from "../types";
import PopularProductCard from "./PopularProductCard";

interface IPopularProductsProps {
    userPromise : Promise<IPopularProduct[]>;
    cart : IPopularProduct[];
    setCart : Dispatch<SetStateAction<IPopularProduct[]>>;
}
const PopularProducts = ({userPromise, cart, setCart} : IPopularProductsProps) => {
    // console.log(userPromise, "userPromise")
    // const [cart, setCart] = useState<IPopularProduct[]>([])
    const data = use(userPromise);
    // console.log(data, "data");
    

    console.log(cart, "carttttt");
    return ( 
        <div className='my-[80px] container mx-auto'>
            <h2 className='text-3xl font-bold mb-4 text-[#179800]'>Popular Products</h2>


            <div className="grid grid-cols-12 gap-4">
                {/* card -> 30% */}

                <div className='col-span-4 rounded-md shadow-2xl p-4  
                 bg-gradient-to-r from-[#179800] to-[#6d7b6a]'>
                    <h2 className='font-bold text-2xl'>30% discount</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo esse, voluptatum, inventore consequuntur, impedit est cumque similique eius vitae dignissimos</p>
                    <button className='bg-white text-[#179800] font-bold py-2 px-4 rounded-md
                     hover:bg-gray-200'>Buy now</button>
                 </div>
               
                {/* 70% */}
                <div className='col-span-8'>
                    {/* card1, card2, card3 */}
                    <div className="grid grid-cols-3 gap-4">
                        {
                            data.map((product) => {
                            // console.log(data, "data")
                                return(
                                    <PopularProductCard key = {product.title} product = {product} 
                                    cart = {cart} setCart={setCart}></PopularProductCard>
                                )       
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
