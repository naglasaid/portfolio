
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="container pt-5">
      <MailchimpForm />
        <div  className="row  align-items-center">
          
          <div className="col-12 col-sm-6">
            <img src={logo} alt="Logo" />
          </div>
          <div   className="col-12 col-sm-6 text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
