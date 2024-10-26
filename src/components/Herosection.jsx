import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/herosection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [serviceSearch, setServiceSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Data.json'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResults(data);
                setFilteredResults([]); 
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        
        if (serviceSearch.length > 0 || locationSearch.length > 0) {
            const filtered = results.filter(item =>
                item.service.toLowerCase().includes(serviceSearch.toLowerCase()) &&
                item.location.toLowerCase().includes(locationSearch.toLowerCase())
            );
            setFilteredResults(filtered); 
        } else {
            setFilteredResults([]); 
        }
    };

    const handleInputChange = () => {
        handleSearch(); 
    };

    return (
        <div className="hero">
            <div className="container text-center">
                <h1 className="text-white">Are You a Supplier?</h1>
                <h2 className="text-white">Explore Matching Opportunities</h2>
                <div className="row justify-content-center align-items-end mt-3">
                    <div className="col-12 col-md-4 position-relative mb-2 mb-md-0"> 
                        <i className="fas fa-search position-absolute" style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'orange' }}></i>
                        <input
                            type="text"
                            className="form-control search-bar ps-5"
                            placeholder="Search your required service here"
                            value={serviceSearch}
                            onChange={(e) => {
                                setServiceSearch(e.target.value);
                                handleInputChange(); 
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-4 position-relative mb-2 mb-md-0"> 
                        <i className="fas fa-map-marker-alt position-absolute" style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'orange' }}></i>
                        <input
                            type="text"
                            className="form-control search-bar ps-5"
                            placeholder="Search your desired location here"
                            value={locationSearch}
                            onChange={(e) => {
                                setLocationSearch(e.target.value);
                                handleInputChange(); 
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-2">
                        <button id='btnhero' className="btn btn-success" onClick={handleSearch}>Search</button>
                    </div>
                </div>

                
                {(serviceSearch.length > 0 || locationSearch.length > 0) && (
                    <div className="result-list mt-4" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {filteredResults.length > 0 ? (
                            filteredResults.map((result, index) => (
                                <div key={index} className="result-item text-white">
                                    <h5>{result.service} in {result.location}</h5>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">No results found.</p>
                        )}
                    </div>
                )}

                <div className='btm'>
                    <h2>Are you a buyer ?</h2>
                    <Link className='lnk' to={'#'} style={{color:'white'}}>click here if you looking to post a requirement</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
