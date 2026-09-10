import { type Dispatch, type SetStateAction } from 'react';
import type { IPopularProduct } from '../types';
import { Bounce, toast } from 'react-toastify';

interface IPopularProductsProps {
    product : IPopularProduct;
    cart : IPopularProduct[];
    setCart : Dispatch<SetStateAction<IPopularProduct[]>>;
}

const PopularProductCard = ({product, cart, setCart} : IPopularProductsProps) => {
    const handleAddToCart = (product : IPopularProduct) => {
        console.log("Clicked add to cart: ", product);
        setCart([...cart, product]);
        // alert(`${product.title} added to cart!`);
        // toast.success(`${product.title} added to cart!`);
        toast.success(`🦄 Wow so easy! ${product.title} added to Cart!!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
});
}

    return (
        <div>
            <div key = {product.title} className="bg-white p-4 rounded-md shadow-md">
                <img src = {product.productImg} alt = {product.title} 
                className="w-full h-48 object-cover rounded-md"></img>
                <h3 className = "font-bold text-lg">{product.title}</h3>
                <p className="text-gray-600">{product.price.toFixed(2)}</p>
                <p className="text-yellow-500">Rating: {product.rating}</p>
                <button onClick={() => handleAddToCart(product)} className="bg-[#179800]
                text-white font-bold py-2 px-4 rounded-md 
                hover:bg-[#145c00]">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default PopularProductCard;