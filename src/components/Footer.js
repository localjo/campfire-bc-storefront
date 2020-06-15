import React from 'react';
import { Link } from 'gatsby';

import FbIcon from '../svg/facebook.inline.svg';
import IgIcon from '../svg/instagram.inline.svg';
import TwIcon from '../svg/twitter.inline.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div
          className="content has-text-white-ter"
          style={{ paddingBottom: '3em' }}
        >
          <div className="container has-text-centered has-text-white-ter">
            <div className="columns is-mobile">
              <div className="column is-2">
                <Link to="/">Home</Link>
              </div>
              <div className="column is-2">
                <Link to="/shop">Shop</Link>
              </div>
              <div className="column is-2">
                <Link to="/blog">Blog</Link>
              </div>
              <div className="column is-2 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/campfirequestiongame"
                >
                  <FbIcon
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div className="column is-2 social">
                <a title="twitter" href="https://twitter.com/campfirethegame">
                  <TwIcon
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              <div className="column is-2 social">
                <a
                  title="instagram"
                  href="https://instagram.com/campfirequestions"
                >
                  <IgIcon
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
