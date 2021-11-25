import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "./home.css"

const whyUs = [
    {   id:"descp-1",
        title:"Get more visibility", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {   
        id:"descp-2",
        title:"Organize your candidates", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {   
        id:"descp-3",
        title:"Verify their abilities", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    }
]
function Home(){
    return(
        <>
         <Banner/>
      <div className="card-container">
      <div className="why-us-section">
        <h4>
          Why Us
        </h4>
      </div>
      <div className="cart-section">
          {
              whyUs.map((item) => (
              <Card key={item.id} title={item.title} description={item.description}/>
              ))
          }
      </div>
      </div>
        </>
    )
}

export default Home;