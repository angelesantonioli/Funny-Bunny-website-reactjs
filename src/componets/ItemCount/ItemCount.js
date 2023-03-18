

const ItemCount = ({ counter, setCounter, stock }) => {
    const add = () => {
        setCounter(counter + 1);
    };
    const take = () => {
        setCounter(counter - 1);
    };
    return (
        <div className="counter">
            <h2>{counter}</h2>
            <div className="controlers">
                <button onClick={take} disabled={counter <= 0}>-</button>
                <button onClick={add} disabled={counter >= stock}>+</button>
            </div>
        </div>
    )
};



export default ItemCount;