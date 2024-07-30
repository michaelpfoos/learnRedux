import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCapital } from '../redux/capitalSlice';
import { incrementDebt, decrementDebt, incrementDebtByAmount, selectDebt } from '../redux/debtSlice';

const MainApp = () => {
    const dispatch = useDispatch(); //useDispatch to dispatch actions to update the state in redux
    const capitalStateValue = useSelector(selectCapital); //useSelector to get the state value
    const debtStateValue = useSelector(selectDebt); //useSelector to get the state value
    const [netWorth, setNetWorth] = useState(capitalStateValue - debtStateValue); 

    useEffect(() => {
        setNetWorth(capitalStateValue - debtStateValue);
    }, [capitalStateValue, debtStateValue]);

    return (
        <div className="card"> 
            <p>Hi!</p>
            <p>Capital: {capitalStateValue}</p>
            <p>Debt: {debtStateValue}</p>
            <p>Net Worth: {netWorth}</p>
            <button onClick={() => dispatch(increment())}>Increment Capital</button>
            <button onClick={() => dispatch(decrement())}>Decrement Capital</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment Capital by 5</button>
            <button onClick={() => dispatch(incrementDebt())}>Increment Debt</button>
            <button onClick={() => dispatch(decrementDebt())}>Decrement Debt</button>
            <button onClick={() => dispatch(incrementDebtByAmount(5))}>Increment Debt by 5</button>
        </div>
    )
}

export default MainApp;