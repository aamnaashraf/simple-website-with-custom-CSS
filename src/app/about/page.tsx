import React from 'react'

const page = () => {
    return (
        <div className="about-container">
         
          <header className="about-header">
            <h1 className="about-title">Welcome to LearnHub</h1>
            <p className="about-tagline">
              Unlock the Power of Online Learning – Anytime, Anywhere
            </p>
          </header>
    
          <section className="about-content">
            <h2>Our Mission</h2>
            <p>
              At LearnHub, we strive to make quality education accessible for everyone.
              Whether you're looking to advance in your career or learn a new skill, we are here to help.
            </p>
          </section>
    
          <section className="about-features">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Expert Instructors</h3>
                <p>Learn from professionals with real-world experience in their fields.</p>
              </div>
              <div className="feature-item">
                <h3>Flexible Learning</h3>
                <p>Study at your own pace with our flexible online courses.</p>
              </div>
              <div className="feature-item">
                <h3>Global Community</h3>
                <p>Connect with students from around the world and collaborate on projects.</p>
              </div>
            </div>
          </section>
    
          <footer className="about-footer">
            <p>Join thousands of learners today and start your journey with LearnHub!</p>
          </footer>
        </div>
      );
    };
    
    
  
  export default page;