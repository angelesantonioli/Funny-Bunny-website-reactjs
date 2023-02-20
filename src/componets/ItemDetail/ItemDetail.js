

const ItemDetail = ({detail}) => {
    console.log(detail)
    return <div style={{display: 'flex', justifyContent:'center', padding:'20px',flexDirection: 'column' }} > 
        <img src={detail} alt={detail.name} width="200px" />
        <h2> {detail.name} </h2>
        <h2> {detail.description} </h2>
        <h2> {detail.price} </h2>
            </div>
        };

export default ItemDetail;