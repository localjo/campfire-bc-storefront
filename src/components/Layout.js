import React, { useRef, useEffect, useState, cloneElement } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Helmet } from 'react-helmet';

import BackgroundNarrow from '../svg/background-narrow.inline.svg';
import Background from '../svg/background.inline.svg';

import PineTreesNarrow from '../svg/pine-trees-narrow.inline.svg';
import PineTrees from '../svg/pine-trees.inline.svg';

import CampfireNarrow from '../svg/campfire-narrow.inline.svg';
import Campfire from '../svg/campfire.inline.svg';

import ForegroundNarrow from '../svg/foreground-narrow.inline.svg';
import Foreground from '../svg/foreground.inline.svg';

import Navbar from './Navbar';
import Footer from './Footer';
import Notify from './bigcommerce/Notify';
import './all.sass';
import './Layout.css';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const parallaxRef = useRef();
  const [bannerOffset, setBannerOffset] = useState(0.5);
  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      const base = innerWidth <= 768 ? 600 : 1000;
      const offset = ((innerWidth / base) * 600) / innerHeight;
      setBannerOffset(offset < 0.8 ? offset : 0.8);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <Notify />
      <Parallax ref={parallaxRef} pages={2} scrolling="false">
        <ParallaxLayer offset={0} speed={0.4}>
          <BackgroundNarrow className="scene-image is-hidden-tablet" />
          <Background className="scene-image is-hidden-mobile" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <PineTreesNarrow className="scene-image is-hidden-tablet" />
          <PineTrees className="scene-image is-hidden-mobile" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <CampfireNarrow className="scene-image is-hidden-tablet" />
          <Campfire className="scene-image is-hidden-mobile" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.4}>
          <ForegroundNarrow className="scene-image is-hidden-tablet" />
          <Foreground className="scene-image is-hidden-mobile" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <Navbar />
        </ParallaxLayer>
        {cloneElement(children, { bannerOffset })}
        <ParallaxLayer offset={1.5} speed={1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default TemplateWrapper;
