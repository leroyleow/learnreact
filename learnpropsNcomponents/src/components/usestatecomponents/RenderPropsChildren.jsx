import { useState } from "react";

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>;

const Amount = ({children}) => {
    const [amount, setAmount] = useState(0);

    const handleIncrement= () => setAmount(amount + 1);
    const handleDecrement= () => setAmount(amount - 1);

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <p>US Dollar: {amount}</p>
            {children(amount)}
        </div>
    );
};

const CurrencyContainer = () => (
    <div>
    <h1>US Dollar to Euro:</h1>
    <Amount toCurrency={(amount) => <Euro amount={amount} />} />

    <h1>US Dollar to Pound:</h1>
    <Amount toCurrency={(amount) => <Pound amount={amount} />} />
    </div>
);

export default CurrencyContainer;