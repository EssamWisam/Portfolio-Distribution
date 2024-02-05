import React from "react";
import "./Footer.scss";



const Footer: React.FC = () => {
  return (
    <div className="real-footer">
      <footer>
        <div className="footer-bottom">
          <p>Copyright © 2023 All Rights Reserved.</p>
          <p>
              <a href="mailto:essamwisam@outlook.com">Contact Me</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
