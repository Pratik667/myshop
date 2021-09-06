import React,{useEffect,useState} from 'react';

const Category = () =>{
return(
    <>
     <div className="container mt-5">
            <h3 className="signature-header">Top Categories to bag</h3>
                <div className="row">                      
               
                    <div className="col"> 
                        <div className="card category-card" >
                           <a href="#">
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/jwellery.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h3 className="card-title">Jewelery</h3> 
                            </div>
                            </a>
                        </div>
                                                    
                    </div> 
                    <div className="col"> 
                        <div className="card category-card" >
                        <a href="#">
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/electronics.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Electronics</h5>   
                            </div>
                            </a>
                        </div>
                                                    
                    </div> 
                     <div className="col"> 
                        <div className="card category-card" >
                        <a href="#">
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/mensclothing.jpeg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Men's Wear</h5>      
                            </div>
                            </a>
                        </div>
                                                    
                    </div> 
                    <div className="col"> 
                        <div className="card category-card" >
                        <a href="#">
                            <img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/womens.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Women's Wear</h5>  
                            </div>
                            </a>
                        </div>
                                                    
                    </div>       
            </div>
    </div>
    </>
)
}

export default Category