'use client'
import Header from "@/app/components/Header/Header";
import data from "@/app/Data/data";
import {useState} from "react";
import Basket from "@/app/components/Basket/Basket";
import Main from "@/app/components/Main/Main";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}
export default function Home() {
    const { products } = data;
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const onAdd = (product: Product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty+ 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const onRemove = (product: Product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist && exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist!, qty: exist!.qty - 1 } : x
                )
            );
        }
    };

    return (
        <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <Main products={products} onAdd={onAdd}></Main>
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></Basket>
            </div>
        </div>
    );
}