import React from "react";
import "./Footer.scss";

interface Props {
  heroData: any;
}


const Footer: React.FC<Props> = ({heroData}) => {
  return (
    <div className="real-footer">
      <footer>
        <div className="footer-bottom">
          <p>Copyright © 2023 All Rights Reserved.</p>
          <p>
              <a href={`mailto:${heroData.email}`}>Contact Me</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
