import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductEdit (){
    let[price, setPrice]= useState("");
    let[name, setName] = useState("");
    let[image, setImage] =useState("");
    const navigate = useNavigate('');
    
    const {id} =useParams();
    const [product, setProduct] = useState([]);

    const productSubmit= (e)=>{

        e.preventDefault();
        //    if (localStorage.getItem('user')){
        //        // navigate('/login');
        //     }else{
        //         navigate('/login');
        //     }
    
        //  let fd = new FormData()
        // fd.append("images", images);
         
          const data = new FormData() 
          data.append('p_name', name)
          data.append('p_price', price)
          data.append('image', image)
          data.append('id', id)
          console.log("data-----", data)
            var obj = {id: id,p_name: name, p_price: price,image: image};

           console.log("-------image", obj)
            axios.post("http://127.0.0.1:8000/api/product_edited", data)
            .then(resp=>{
                var token = resp.data;
                console.log(token);
    
    
                // var user = {userId: token.userid, access_token:token.token};
                // localStorage.setItem('user',JSON.stringify(user));
    
    
                // console.log(localStorage.getItem('user'));
            }).catch(err=>{
                console.log(err);
            });
    
    
        }











    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/APIProduct_details/${id}`).then(response =>{
            setProduct(response.data);
            console.log(response.data);
        });
        
    },[]);


    return(
        <div>
               
        
                  
        <form onSubmit={(e)=>productSubmit(e)} encType="multipart/form-data" id="imageForm">
         <div className="form-group">
             <label>Product Name:</label>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
         </div>
       
         <div className="form-group">
             <label>price:</label>
             <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)}></input>
         </div>
       
         <div className="form-group">
             <strong>Image:</strong>
             <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
         </div>
       
         {/* <button onClick={productSubmit}>Add</button> */}
         <button type="submit" className="btn btn-success">
         Add
                 </button>
       </form>
       
       
       
                     
               </div>
     )
   
    }       
// export default ProductEdit;  
