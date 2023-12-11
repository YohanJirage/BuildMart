import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./Products";
import images from "../images/index.js";

import video from "../images/about-vid.mp4";
import { Carousel } from 'react-bootstrap';

// import "../style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faUser,
  faShoppingCart,
  faBullseye,
 
} from "@fortawesome/free-solid-svg-icons";
import Home from "../MainHome/Home";

export default function CustomerHomepage() {
 

  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [vendorproducts, setVendorProducts] = useState([]);
  const [msg, setMsg] = useState("");
  const [qty, setQty] = useState(0);

  // const [data, setData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [addedToCart, setAddedToCart] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const [productid, setProductid] = useState(1);

  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([{}])
  const [productFlag, setProductFlaf] = useState(true);

  const uid = (JSON.parse(localStorage.getItem("loggedUser"))).id;
  const user = (JSON.parse(localStorage.getItem("loggedUser")));
  


  useEffect(() => {
    
    fetch("http://localhost:8080/getCategories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data));

    fetch("http://localhost:8080/getProducts")
    .then((resp) => resp.json())
    .then((data) => setAllProducts(data));

  }, []);

  const showProduct = (e) => {
    // setAllProducts([{}])
    if(e.target.value > 0)
    {
    fetch("http://localhost:8080/getAvailableProducts?cid=" + e.target.value)
      .then((resp) => resp.json())
      .then((data) => setAllProducts(data));

     
      // setCatflag(true);
      setPrdflag(false);
      setVendorProducts([])
      // setProductFlaf(false)
    }
    else
    {
      setCatflag(false);
      fetch("http://localhost:8080/getProducts")
      .then((resp) => resp.json())
      .then((data) => setAllProducts(data));
  
      
    }

  };

  const viewProduct = (v) => {

    localStorage.setItem("v", v); 
    navigate("/viewproduct");
    // alert(productid);
    // fetch("http://localhost:8080/getVendorProductsCustomer?pid=" + v)
    //   .then((resp) => resp.json())
    //   .then((data) => setVendorProducts(data));

    //   setPrdflag(true);



    //   $(document).ready(() => {
    //   $("#prd").hide("fast");
    // });
  };

  // const addToCart = (product) => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   cart.push(product);
  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   setSuccessMessage("Item added to cart successfully!");
  //   setAddedToCart((prevState) => ({
  //     ...prevState,
  //     [product.p_id]: true,
  //   }));
  // };

  const addToCart1 = (vpid, uid, qty) => {
    fetch(
     
      "http://localhost:8080/addToCart?vpid=" +
        vpid +
        "&uid=" +
        uid +
        "&qty=" +
        qty
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data !== null) {
          setMsg("successfully added to cart");
        } else {
          setMsg("something went wrong");
        }
      });
      // alert(qty);
  };

  const[catflag,setCatflag]=useState(false);
  const[prdflag,setPrdflag]=useState(false);

  return (
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

      <div  id="operations">
      
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div> */}
        <div>
          <h1 className="text-prmary text-center">Welcome </h1>
        </div>
       
        {/* <select
          name="ops"
          onChange={(e) => {
            navigate(e.target.value);
          }}
        >
          <option>user operations</option>
           <option value="/editProfile">Edit profile</option>
          <option value="/viewProfile">View Profile</option>
          <option value="/myOrders">My orders</option>
          <option value="/logOut">Log out</option>
        </select>
         */}
      </div>
      <div id="cart">


      <div>
            <Carousel>
                <Carousel.Item data-interval={100}>
                  <div height={600} className="card bg-black">
                    <img
                 
                 height={500}
                        className="d-block w-100 h-150 "
                        src={images["home-slide-1.jpg"]}
                        alt="Image 1"
                        object-fit="cover"
                    />
                     <h3 className="card-title text-white">We Provide The Best Service</h3>
                    <p className="text-white">
                      We provide services like providing construction materials for individual customers as well as construction companies with affordable price
                    </p>
                    
                    </div>
                </Carousel.Item>
                <Carousel.Item data-interval={80}>
                   <div height={600} className="card bg-black">
                    <img
                       height={500}
                        className="d-block w-100 h-150"
                        src={images["home-slide-2.jpg"]}
                        alt="Image 2"
                        object-fit="cover"
                    />
                    <h3 className="card-title text-white">Making Dreams Come To Life</h3>
                    <p className="text-white">
                      We help you to build your dream home and ease your efforts to build it
                    </p>
                    </div> 
                </Carousel.Item>
                <Carousel.Item data-interval={80}>
                  <div   height={600} className="card bg-black">
                    <img
                      height={500}
                        className="d-block w-100 h-150"
                        src={images["home-slide-3.jpg"]}
                        alt="Image 3"
                        object-fit="cover"
                    />
                     <h3 className="card-title text-white">From Concept To Creation</h3>
                      <p className="text-white">
                      Building with vision, quality, and pride. Innovative renovation at your side. A once-in-a-lifetime project deserves timeless construction. Whatever your vision, we'll nail it for you!
                      </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item data-interval={80}>
                  <div  height={600} className="card bg-black" >
                    <img
                         height={520}
                        className="d-block w-100 h-70"
                        src={images["blog-9.jpg"]}
                        alt="Image 4"
                        object-fit="cover"
                    />
                     <h3 class="card-title text-white">Our Priorities</h3>
                      <p className="  text-white">Building with vision, quality, and pride. 
                                          Innovative renovation at your side. A once-in-a-lifetime project deserves timeless construction. 
                                          Whatever your vision, we'll nail it for you!
                      
                      </p>
                    </div>
                </Carousel.Item>
            </Carousel>

        
          </div> 

        {/* <button
          type="button"
          className="btnn"
          onClick={() => {
            navigate("/viewCart");
          }}
        >
          View Cart
        </button> */}
      </div>
      {/* <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3"> */}
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <select className="btnn" name="categories" onChange={(e) => showProduct(e)}>
                <option>All Catagories</option>
                {categories.map((v) => {
                  return <option value={v.id}>{v.name}</option>;
                })}
              </select>
            </li>
            {/* {categories.map(v=>{return <li className="nav-item"><Link to={v.name} className="nav-link">{v.name}</Link></li>})} */}
          </ul>
        </div>

        <div style={{display:productFlag?"block":"none"}}>
        <div>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {allProducts.map((v, index) => (
              <div key={v.id} className={`product-container bg-${index % 6 + 1}`}>
                <div className="product-border"> {/* Add a container with border */}
                  <div className="product-content">
                    <div className="product-image">
                      <img src={`data:image/png;base64,${v.picture}`} alt="Product" className="img-thumbnail product-image-border" style={{ width: '200px', height: '200px' }} />
                    </div>
                    <div className="product-details">
                      {/* Product details here */}
                      <div className="product-name">
                 <strong>Product Name:</strong> {v.productName}
               </div>
               <div className="">
               <button
                      type="button"
                      onClick={() => {
                        setProductid(v.id);
                        viewProduct(v.id);
                      }}
                      className="btnn btn-outline-warning"
                    >
                      View Product
                    </button>
               </div>
               {/* <div className="product-brand">
                 <strong>Brand:</strong> {v.brand_id.name}
               </div>
               <div className="product-price text-success">
                 <strong>Price:</strong> ₹{v.price}.00
               </div>
               
               <div className="add-to-cart">
                <Link to="/login" className="btn btn-primary btn-block">Buy</Link>
              </div> */}
              </div>
              </div>
                </div>
                {/* {index !== data.length - 1 && <hr className="product-separator" />} */}
              </div>
            ))}
            <div>
            </div>
          </div>
        </div>
      </div>
        </div>
      {/* </nav> */}
      {/* <div style={{display:catflag?"block":"none"}} className="table-responsive">
        <table id="prd" className="table table-striped table-primary">
          <thead className="thead-dark">
            <tr>
              <th>
                {" "}
                <h2>Product image</h2>
              </th>
              <th>
                {" "}
                <h2>Product name</h2>
              </th>
              <th>
                {" "}
                <h2>Description</h2>
              </th>
              <th>
                {" "}
                <h2>View</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((v) => {
              return (
                <tr key={v.id}>
                  <td>
                    <img
                      src={`data:image/png;base64,${v.picture}`}
                      alt="Product"
                      className="img-thumbnail"
                      style={{ maxWidth: "300px", height: "300px" }}
                    />
                  </td>
                  <td className="product-details">
                    <h3>{v.productName}</h3>
                  </td>
                  <td className="product-details">
                    <h3>{v.description}</h3>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        setProductid(v.id);
                        viewProduct(v.id);
                      }}
                      className="btn btn-outline-warning"
                    >
                      View Product
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
   <div  style={{display:prdflag?"block":"none"}}>
      <table  className="table table-striped table-responsive table-success">
        <thead>
          <tr>
            <th>
              <h2>Image</h2>
            </th>
            <th>
              <h2>Product name</h2>
            </th>
            <th>
              <h2>Description</h2>
            </th>
            <th>
              <h2>Vendor name</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
            
            <th>
              <h2>Cart ops</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {vendorproducts.map((v) => {
            return (
              <tr>
                <td>
                  <img
                    src={`data:image/png;base64,${v.product.picture}`}
                    alt="Product"
                    className="img-thumbnail"
                    style={{ maxWidth: "300px", height: "300px" }}
                  />
                </td>
                <td>
                  <h3>{v.product.productName}</h3>
                </td>
                <td>
                  <h3>{v.product.description}</h3>
                </td>
                <td>
                  <h3>{v.vendor.shopName}</h3>
                </td>
                <td>
                  <h3> {v.price}</h3>
                </td>
                <td>
                  <div className="input-group">
                   
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-warning"
                        type="button"
                        onClick={() => addToCart1(v.id, uid, qty)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <label htmlFor="qty">Enter quantity</label>
        <input
                      type="number"
                      className="form-control"
                      id="qty"
                      name="qty"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
      </div>
      </div>
      
      <div className="text-success">{msg}</div>
      <Outlet />
    </div>
    </div>
  );
}
