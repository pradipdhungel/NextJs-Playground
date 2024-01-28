import React from 'react';
import Product from "@/app/components/Product/Product";


interface MainProps {
    products: {
        id: number;
        name: string;
        price: number;
        image: string;
    }[];
    onAdd: (product: { id: number; name: string; price: number; image: string }) => void;
}

const Main: React.FC<MainProps> = (props) => {
    const { products, onAdd } = props;

    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
};

export default Main;
