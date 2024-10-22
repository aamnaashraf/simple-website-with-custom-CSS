import React from 'react';


const ContactPage = () => {
    return (
        <div className="contact-page-container">
            {/* Contact Details Section */}
            <div className="contact-details">
                <h2>Contact For Any Query</h2>
                <div className="contact-info">
                    <div className="info-block">
                        <h3>Get In Touch</h3>
                        <p>
                            The contact form is currently inactive. Get a functional and working
                            contact form with Ajax & PHP in a few minutes.
                        </p>
                        <p className="contact-link">Download Now.</p>

                        <ul className="info-list">
                            <li>
                                <strong>Office:</strong> 123 Street, New York, USA
                            </li>
                            <li>
                                <strong>Mobile:</strong> +012 345 67890
                            </li>
                            <li>
                                <strong>Email:</strong> info@example.com
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Message" required></textarea>
                            <button type="submit" className="btn-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-section">
                <h2>Sign Up for Our Newsletter</h2>
                <p>Stay updated with the latest news and special offers!</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit" className="btn-signup">Sign Up</button>
                </form>
            </div>
        </div>
       
    );
};

export default ContactPage;