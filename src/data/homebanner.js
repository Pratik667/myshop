import React,{useEffect,useState} from 'react';

const HomeBanner = () =>{

 const [product, setproduct] = useState([]);
const getUsers = async() => {
    const single = await fetch('https://fakestoreapi.com/products/3');
     setproduct(await single.json());

}
useEffect(() => {
    getUsers();
});

return(
    <>
        <div className="container-fluid single-banner mt-5">
            <div className="card container">
            
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">{product.description}</p>     
                    <button className="btn shop-btn">Shop Now</button>             
                </div>
                </div>
            </div>
            </div>
         
                
        </div>
    </>
)
}

export default HomeBanner