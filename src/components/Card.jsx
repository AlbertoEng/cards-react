const Card = ({name, image, id, agregarAlEquipo}) => {
    return <>
        <div className="card m-1" style={{width:'250px', height: '300px'}}>
            <img src={image} className="card-img-top" alt="..." style={{width:'auto', height:'150px'}}/>
                <div className="card-body flex-direction-column align-items-center">
                    <h5 className="card-title">{name}</h5>
                    <button onClick={ ev => agregarAlEquipo(ev, name, id)} className="btn btn-primary">Argegar al equipo</button>
                </div>
        </div>
    </>
}

export default Card;