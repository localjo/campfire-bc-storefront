import React, { useRef, useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Helmet } from 'react-helmet';

import BackgroundNarrow from '../svg/background-narrow.inline.svg';
import BackgroundNormal from '../svg/background-normal.inline.svg';
import BackgroundWide from '../svg/background-wide.inline.svg';

import PineTreesNarrow from '../svg/pine-trees-narrow.inline.svg';
import PineTreesNormal from '../svg/pine-trees-normal.inline.svg';
import PineTreesWide from '../svg/pine-trees-wide.inline.svg';

import CampfireNarrow from '../svg/campfire-narrow.inline.svg';
import CampfireNormal from '../svg/campfire-normal.inline.svg';
import CampfireWide from '../svg/campfire-wide.inline.svg';

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
      const base = innerWidth <= 768 ? 600 : innerWidth < 1215 ? 1000 : 1500;
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
      <BackgroundNarrow className="scene-image is-hidden-tablet" />
      <BackgroundNormal className="scene-image is-hidden-mobile is-hidden-widescreen" />
      <BackgroundWide className="scene-image is-hidden-touch is-hidden-desktop-only" />
      <Parallax ref={parallaxRef} pages={2} scrolling="false">
        <ParallaxLayer offset={0} speed={0.001}>
          <PineTreesNarrow className="scene-image is-hidden-tablet" />
          <PineTreesNormal className="scene-image is-hidden-mobile is-hidden-widescreen" />
          <PineTreesWide className="scene-image is-hidden-touch is-hidden-desktop-only" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <CampfireNarrow className="scene-image is-hidden-tablet" />
          <CampfireNormal className="scene-image is-hidden-mobile is-hidden-widescreen" />
          <CampfireWide className="scene-image is-hidden-touch is-hidden-desktop-only" />
          <div className="scene-banner">
            <Navbar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={bannerOffset} speed={0.5} factor={0.3}>
          {children}
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default TemplateWrapper;
