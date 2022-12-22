const Card = (props) => {
    return (
        <div className="col-4">
            <div className="card mx-auto shadow">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                    <a href="#" className="btn d-flex justify-content-center">Ver más</a>
                </div>
            </div>
        </div>
    )
}

export default Card;