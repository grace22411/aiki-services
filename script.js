class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="modalContent ">
    <div class="inn animated slideInRight">
        <div class="cancel"><i class="fas fa-times"></i></div>
        <ul>
        <li> <a href="index.html"> Home</a></li>
        <li><a href="about.html"> About</a></li>
        <li><a href="service.html"> Services</a></li>
        <li><a href="contact.html"> Contact</a></li>
        <li><a href="RequestService.html"> Request Our Services</a></li>
        <li><a href="signup.html">Sign up for free</a>  
        </li>
        </ul>
    </div>
</div>
      <header class="container">
      <div class="row">
          <div class="logo col-md-3 col-8">
              <img src="images/aiki-logo.png" alt="">
          </div>
          <div class="col-md-9 col-4">
              <ul>
                  <li> <a href="index.html"> Home</a></li>
                  <li><a href="about.html"> About</a></li>
                  <li><a href="service.html"> Services</a></li>
                  <li><a href="contact.html"> Contact</a></li>
                  <li><a href="RequestService.html"> Request Our Services</a></li>
                  <li><a href="signup.html"> <button>Sign up for free</button></a>  
                  </li>
              </ul>
              <i class="fas fa-bars"></i>
          </div>
      </div>

  </header>
      `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <div class="logo">
                      <img src="images/aiki-white logo.png" alt="Aiki Logo White">
                  </div>
              </div>
              <div class="col-md-4">
                  <h3>Company</h3>
                  <li> <a href="index.html"> Home</a></li>
                <li><a href="about.html"> About</a></li>
                <li><a href="service.html"> Services</a></li>
                <li><a href="contact.html"> Contact</a></li>
                <li><a href="signup.html">Apply for Job</a> 
              </div>
              <div class="col-md-4">
                  <h3>Contact</h3>
                  <i class="fab fa-facebook-square"></i>
                  <i class="fab fa-instagram-square"></i>
                  <i class="fab fa-linkedin"></i>
                  <i class="fab fa-twitter-square"></i>
              </div>
          </div>
      </div>
      <div class="container post-footer">
          <div class="row">
              <div class="col-md-6">
                  <p>All rights Reserved,2021</p>
              </div>
              <div class="col-md-6 privacy">
                  <p>Privacy Policy | Terms of Condition </p>
              </div>
          </div>
      </div>
  </footer>
        `;
  }
}
customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
