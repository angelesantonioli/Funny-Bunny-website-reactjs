import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Firestore, doc, getDoc, getFirestore, QuerySnapshot } from "firebase/firestore";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detailObject, setDetailObject] = useState([]);
    // const getProduct = new Promise ((res, rej) => {
    //     setTimeout(() => {
    //         const findProduct = products.find(item => item.id == id
    //         )
    //         res(findProduct)
    //     }, 1000)
    // });

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, 'products', id);

        getDoc(querySnapshot)
        .then((res) => {
            setDetailObject({
                id: res.id, ...res.data()
            });
        })
        .catch((error) => (console.log(error)))
    }

    useEffect(() => {
        // getProduct
        // .then(response => {setDetailObject(response)})
        // .catch((error) => {console.log(error)})
        getProduct();
    }, [])
    return <div style={{display: 'flex', justifyContent:'center', padding:'20px',flexDirection: 'column' }} > 
    <ItemDetail detail={detailObject} />
            </div>;
};

export default ItemDetailContainer;