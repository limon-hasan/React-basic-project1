import type { IPopularProduct } from '../types';
interface ICartProps {
    cart : IPopularProduct[];
}
const Cart = ({cart} :ICartProps ) => {
    console.log(cart, "cartoooo");
    
    // if(cart.length === 0) {
    //     return(
    //         <div className='my-[80px] container mx-auto'>
    //             <h2 className='text-3xl font-bold mb-4 text-[#179800]'>
    //                 Cart
    //             </h2>
    //             <p>Your cart is empty</p>
    //         </div>
    //     )
    // }
    return (
        <div className='my-[80px] container mx-auto'>
            <h2 className='text-3xl font-bold mb-4 text-[#179800]'>Cart</h2>
            {
                cart.length === 0 ? <p> Your cart is empty </p> : <div className="grid grid-cols-12 gap-4">
                    {
                        cart.map((product) => {
                            return(
                                <div key = {product.title} 
                                    className="col-span-4 bg-white p-4 rounded-md shadow-md">
                                    <img 
                                        src = {product.productImg} alt = {product.title} 
                                        className="w-full h-48 object-cover rounded-md">
                                    </img>
                                    <h3 className = "font-bold text-lg">{product.title}</h3>
                                    <p className="text-gray-600">{product.price.toFixed(2)}</p>
                                    <p className="text-yellow-500">Rating: {product.rating}</p>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            }

            {cart.length > 0 && (
                <div className = "mt-4">
                <h3 className='font-bold text-lg'>
                    Total : $
                    {
                        cart.reduce((total, product) => total + product.price, 0).toFixed(2)
                    }
                </h3>
                </div>
            )}
        </div>
    );
};

export default Cart;