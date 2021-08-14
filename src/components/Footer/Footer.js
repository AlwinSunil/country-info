import React from "react";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icons/twitter.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/github.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__end">
        <p className="footer__info">
          © 2021&nbsp;
          <a
            className="footer__link"
            href="https://alwinsunil.tk"
            rel="noopener noreferrer"
          >
            Alwin Sunil
          </a>
        </p>
      </div>
      <div className="footer__social">
        <a
          href="http://instagram.com/mr_alwin_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="http://github.com/AlwinSunil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="social__github" />
        </a>
        <a
          href="http://twitter.com/alwinsunil_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
