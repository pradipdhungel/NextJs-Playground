import React from 'react';

interface ProductProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    onAdd: (product: { id: number; name: string; price: number; image: string }) => void;
}

const Product: React.FC<ProductProps> = (props) => {
    const { product, onAdd } = props;

    return (
        <div>
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
