import React from 'react'
import "../style/howitwork.css"

const Howitworks = () => {
    return (
        <div className="supplier-finder">
          <header className='clr'>
            <h1>Let Suppliers Find You</h1>
            <button className="get-verified">Get Verified</button>
          </header>
          
          <section className="how-it-works">
            <h2>How it works?</h2>
            <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            
            <div className="steps">
              {[
                { icon: '👤', title: 'Select Your Role and Sign Up' },
                { icon: '📝', title: 'Buyers Post Your Requirements' },
                { icon: '🔍', title: 'Review, Select, and Contact the Best Suppliers' },
                { icon: '👥', title: 'Suppliers Complete your profile and get notified for opportunities' },
                { icon: '💬', title: 'Contact to Buyers and Share Quote for the service' },
                { icon: '🤝', title: 'Both the Parties can Connect and Make Business Leave a Feedback' }
              ].map((step, index) => (
                <div key={index} className="step">
                  <span className="icon">{step.icon}</span>
                  <p>{step.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
}

export default Howitworks