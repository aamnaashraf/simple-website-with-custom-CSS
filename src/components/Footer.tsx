
const Footer = ()=>{
    return(

<footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>
        We provide quality online courses to help you develop your skills and
        achieve your career goals.
      </p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact Info</h3>
      <ul>
        <li><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
        <li><i className="fas fa-phone"></i> +012 345 67890</li>
        <li><i className="fas fa-envelope"></i> info@example.com</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Your Website. All rights reserved.</p>
  </div>
</footer>
    );
};

export default Footer;