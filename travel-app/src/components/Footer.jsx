import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">

<div className="footer-content">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6">
        <div className="footer-info text-start">
          <h3>Tripzzy</h3>
          <p>
            Surat, Gujarat, India<br /><br />
            <strong>Phone:</strong> +91 7016154689<br />
            <strong>Email:</strong> jadhavom0408@gmail.com<br />
          </p>
        </div>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/">Home</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Services</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/stays">Find Flights</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/flights">Find Stays</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/about">About us</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/contact">Contact us</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Vacation Packages</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Hotel Reservation</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Flight Booking</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Travel Insurance</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Travel Resources</a></li>
          <li><i className="fas fa-chevron-right me-2"></i> <a href="/services">Customer Support</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter text-start">
        <h4>Our Newsletter</h4>
        <p>Will send you weekly updates for your better tool management.</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>

      </div>

    </div>
  </div>
</div>

<div className="footer-legal text-center">
  <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center">

    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="copyright">
        © Copyright <strong><span>Tripzzy</span></strong>. All Rights Reserved
      </div>
    </div>

    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
      <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

  </div>
</div>

</footer>
    </div>
  )
}

export default Footer
