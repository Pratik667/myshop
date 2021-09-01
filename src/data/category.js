import React,{useEffect,useState} from 'react';

const Category = () =>{

 const [category, setCat] = useState([]);
const getCat = async() => {
    const responses = await fetch('https://fakestoreapi.com/products/categories');
     setCat(await responses.json());
  
}
useEffect(() => {
    getCat();
});

return(
    <>
     <div className="container mt-5">
            <h3 className="signature-header">Top Categories to bag</h3>
                <div className="row">                      
               
                    <div className="col"> 
                        <div className="card category-card" >
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/jwellery.webp" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h3 className="card-title">Jwellery</h3>                               
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                                                    
                    </div> 
                    <div className="col"> 
                        <div className="card category-card" >
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/electronics.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Electronics</h5>                               
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                                                    
                    </div> 
                     <div className="col"> 
                        <div className="card category-card" >
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/mensclothing.jpeg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Men's Wear</h5>                               
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                                                    
                    </div> 
                    <div className="col"> 
                        <div className="card category-card" >
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/womens.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Women's Wear</h5>                               
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                                                    
                    </div>       
            </div>
    </div>
    </>
)
}

export default Category