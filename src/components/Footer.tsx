import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons"
import React from "react"

const Footer = () => (
  <footer className="mx-auto max-w-5xl my-20 px-5 text-sm md:text-base pb-32">
    <div className="flex flex-col md:flex-row items-center gap-5 w-full">
      <div className="text-center md:text-left w-full">
        <ul className="list-none flex gap-8 justify-center md:justify-start">
          <li className="">
            <a
              href="https://github.com/jaredmoran"
              title="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub
                height="40px"
                width="40px"
                className="text-pink-dark transition-colors hover:text-pink"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.linkedin.com/in/therealjaredmoran/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin
                height="40px"
                width="40px"
                className="text-pink-dark transition-colors hover:text-pink"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-right w-full">
        <small>
          © {new Date().getFullYear()}, Designed and built by Jared Moran
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
