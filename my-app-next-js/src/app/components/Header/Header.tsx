import React from 'react';

interface HeaderProps {
    countCartItems: number;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="block row center">
            <div>
                <a href="#/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
                <a href="#/signin"> SignIn</a>
            </div>
        </header>
    );
};

export default Header;
