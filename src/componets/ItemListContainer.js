import './NavBar.css';

function Greetings(props) {
    return (
        <h1 className='hi'>Hello, {props.name}!</h1>
    )
}
export default Greetings;