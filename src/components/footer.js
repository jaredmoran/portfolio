import React from "react"

import Icon from "react-simple-icons"

import footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.footer + " container"}>
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-left">
        <ul className={footerStyles.social}>
          <li className={footerStyles.socialLink}>
            <a
              href="https://github.com/jaredmoran"
              title="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" height="40px" width="40px" />
            </a>
          </li>
          <li className={footerStyles.socialLink}>
            <a
              href="https://www.linkedin.com/in/jared-moran-575a1785/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" height="40px" width="40px" />
            </a>
          </li>
          <li className={footerStyles.socialLink}>
            <a
              href="https://twitter.com/jaredmoran"
              title="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="twitter" height="40px" width="40px" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-6 text-center text-md-right">
        <small>
          © {new Date().getFullYear()}, Designed and built by Jared Moran
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
