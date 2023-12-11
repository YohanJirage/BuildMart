import { useEffect, useState } from "react"
import'../style.css';
import '../Registration/shubham.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faUser,
  faShoppingCart,
  faBullseye,
 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function ViewProduct(ps){

    
  const uid = (JSON.parse(localStorage.getItem("loggedUser"))).id;
  const user = (JSON.parse(localStorage.getItem("loggedUser")));

    const [msg,setMsg]=useState("");
  
    
  
    const [product, setProduct] = useState({});

    const [vendorproducts, setVendorProducts] = useState([{}]);

    useEffect(()=>{

        const pid = localStorage.getItem("v");
        
        fetch("http://localhost:8080/getVendorProductsCustomer?pid=" + pid)
        .then((resp) => resp.json())
        .then((data) => setVendorProducts(data));
       
        fetch("http://localhost:8080/getProductById?pid="+pid)
        .then(resp=>resp.json())
        .then(data=>setProduct(data))

    },[])




    

    const addToCart=(uid,vpid,qty)=>{
        fetch("http://localhost:8080/addToCart?vpid="+vpid+"&userid="+uid+"&qty="+qty)
        .then(resp=>resp.json())
        .then(data=>setMsg("successfully added to cart"))
    }
    return(

        <div>
        
             
    <div className="App fs-4">
      <header className="header container-fluid">
        <ul className="nav navbar">
          <li className="nav-link logo">
            <Link to="/home" className="nav-link" style={{ fontSize: 40 }}>
              Build<span className="text-warning">Mart</span>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/customer" className="nav-link">
              HOME
            </Link>
          </li>

          
          <li className="nav-link">
            <Link to="/myOrders" className="nav-link">
              Order History
            </Link>
          </li>

          
        
          
          <li className="nav-item">
            <Link to="/viewCart" className="nav-link">
              <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewProfile" className="nav-link">
              <div className="icon-container">
              <span >{user.customer.first_name}   </span><FontAwesomeIcon icon={faUser} />
              </div>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </header>
        </div>
        <div className='container table-responsive-smtable-responsive-sm fs-4'>
        <div className="product-image">
            <table>
                <tr>
                    <td>
                      <img src={`data:image/png;base64,${product.picture}`} alt="Product" className="img-thumbnail product-image-border" style={{ width: '400px', height: '400px' }} />
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                      <strong>   Product Name :</strong> 
                                </td>
                                <td>
                                    {product.productName}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                      <strong>   Product Description :</strong> 
                                </td>
                                <td>
                                    {product.description}
                                </td>
                          
                            </tr>
                            <tr>
                                <td>
                                      <strong> Category :</strong> 
                                </td>
                                <td>
                                    {/* {product.category.name} */}
                                </td>
                            </tr>

                        
                        </table>
                    </td>
                  
                </tr>
            </table>

        </div>
        <div  >
      <table  className="table table-striped table-responsive  ">
        <thead>
          <tr>
           
         
            <th>
              <h2>Vendor name</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
            
            <th>
              <h2>Quantity</h2>
            </th>
            <th>
              <h2>Off %</h2>
            </th>
            <th>
              <h2>Offer upto</h2>
            </th>
            <th>
              <h2>Add To Cart</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {vendorproducts.map((v) => {
            return (
              <tr>
                
                <td>
                  {/* <h3>{v.vendor.shopName}</h3> */}
                </td>
                <td>
                  <h3> {v.price}</h3>
                </td>
                <td>
                  <h3> {v.quantity}</h3>
                </td>
                <td>
                  <h3>{v.offerPercentage} </h3>
                </td>
                <td>
                  <h3>{v.offerValidDate} </h3>
                </td>
                <td>
                  <div className="input-group">
                   
                    {/* <div className="input-group-append">
                      <button
                        className="btn btn-outline-warning"
                        type="button"
                        onClick={() => addToCart1(v.id, uid, qty)}
                      >
                        Add to Cart
                      </button>
                    </div> */}
                    <button  className="btn btn-outline-warning" >Add to Cart</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div>
        <label htmlFor="qty">Enter quantity</label>
        <input
                      type="number"
                      className="form-control"
                      id="qty"
                      name="qty"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
      </div> */}
      </div>
        
           
        </div>

        </div>
    )
}