import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div>
            <Spinner animation="grow" />;
            <Spinner animation="grow" />;
            <Spinner animation="grow" />;
        </div>
    )
}

export default Loading;