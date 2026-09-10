import { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import PopularProducts from './components/PopularProducts';
import type { IPopularProduct } from './types';
import Cart from './components/Cart';
import PopularProductsWithUseEffect from './components/PopularProductsWithUseEffect';

const userFetch = async() : Promise<IPopularProduct[]> => {
  const response = await fetch("/popular-products.json")
  const data = await response.json();
  return data;
}


const App = () => {
    const userPromise =  userFetch();

    // Using state lifting up process -> 
    const [cart, setCart] = useState<IPopularProduct[]>([])

    return (
        <>
        <Navbar cart = {cart} />
        <Banner/>
        <Services/>
        <Cart cart = {cart}></Cart>
        <Suspense fallback = {<div>Loading popular products...</div>}>
            <PopularProducts userPromise = {userPromise}
             cart = {cart} setCart = {setCart}/>
        </Suspense>
        <PopularProductsWithUseEffect cart = {cart} setCart = {setCart} />
        <h2>Banner section </h2>
        <h2>Service section</h2>
        <h2>Footer section</h2>
        </>
    );
};

export default App;