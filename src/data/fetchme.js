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
     <h2 className="text-center heads pt-5 signature-header">Collections</h2>
                <div className="row">                      
                {
                    users.map((curElem) => {
                            return(
                                <>          
                                    <div className="col-12 col-sm-8 col-md-4 col-lg-3">
                                    <div className="card floral-bg" id="productid-{curElem.id}">

                                        <img className="card-img" src={curElem.image} alt="{curElem.title}"></img>
                                      
                                        <div className="card-body">
                                        <h4 className="card-title">{curElem.title}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">Category: {curElem.category}</h6>                                                                               
                                        <div className="buy d-flex justify-content-between align-items-center">
                                            <div className="price text-success"><h5 className="mt-4">Rs. {curElem.price} /-</h5></div>
                                            <a href="#" className="btn btn-light mt-3"><i class='bx bxs-cart'></i></a>
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