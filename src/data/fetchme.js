import React,{useEffect,useState} from 'react';

const Fetchme = () =>{

 const [users, setUsers] = useState([]);
const getUsers = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
     setUsers(await response.json());

}
useEffect(() => {
    getUsers();
});

return(
    <>
     <div className="container">
     <h2 className="text-center heads">We Sell</h2>
                <div className="row">                      
                {
                    users.map((curElem) => {
                            return(
                                <>          
                                    <div className="col-12 col-sm-8 col-md-4 col-lg-3">
                                    <div className="card" id="productid-{curElem.id}">
                                        <img className="card-img" src={curElem.image} alt="{curElem.title}"></img>
                                        <div className="card-img-overlay d-flex justify-content-end">
                                        <a href="#" className="card-link text-danger like">
                                            <i className="fas fa-heart"></i>
                                        </a>
                                        </div>
                                        <div className="card-body">
                                        <h4 className="card-title">{curElem.title}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">Category: {curElem.category}</h6>
                                        <p className="card-text">
                                            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool. </p>                                       
                                        <div className="buy d-flex justify-content-between align-items-center">
                                            <div className="price text-success"><h5 className="mt-4">Rs. {curElem.price}</h5></div>
                                            <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </>
                            )
                    })
                }
                 
                            
       </div>
        </div>
    </>
)
}

export default Fetchme