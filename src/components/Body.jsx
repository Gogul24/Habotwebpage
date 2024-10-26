import React from "react";
import "../style/body.css"
import { Link } from "react-router-dom";

const Body = () => {
  const countries = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <h1>Ready to dive into HABOT?</h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant community
            of like-minded individuals, unlock valuable resources, and take the
            first step towards realizing your entrepreneurial dreams.
            
          </p>
          <button className="btn btn-success">
            <Link style={{textDecoration:'none', color:'black'}} to='/log'>Sign up Today! →</Link>
          </button>
        </div>
        
        <div className="col-md-6" >
          <div className="row">
            {countries.map((country, index) => (
              <div className="col-6" key={index}>
                <p>{country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
