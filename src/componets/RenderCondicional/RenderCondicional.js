import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const RenderCondicional = () => {
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);
    if (loading === true ) {
        return (
            <div>
            <Loading/>
            <h1>Loading...</h1>
            </div>
        )
    }
    return <div>a</div>
};

export default RenderCondicional;