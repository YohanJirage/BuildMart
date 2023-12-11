import "../script.js";

import "../style.css";

import images from "../images/index.js";

import video from "../images/about-vid.mp4";
import { Carousel } from 'react-bootstrap';

// Importing ForntAwsome for icon and symbols
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar);

export default function Home() {
  return (
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

  );
}
