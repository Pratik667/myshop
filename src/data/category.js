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
                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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