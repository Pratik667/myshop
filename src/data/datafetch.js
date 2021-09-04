import React,{useEffect,useState} from 'react';

const Datafetch = () =>{

 const [users, setUsers] = useState([]);
const getUsers = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
     setUsers(await response.json());

}
useEffect(() => {
    getUsers();
});


}

export default Datafetch