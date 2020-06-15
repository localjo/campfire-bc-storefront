import React, { useRef, useEffect, useState, cloneElement } from 'react';
import { Parallax, ParallaxLayer } from 'rspjs';
import { Helmet } from 'react-helmet';

import BackgroundNarrow from '../svg/background-narrow.inline.svg';
import BackgroundWide from '../svg/background-wide.inline.svg';
import Background from '../svg/background.inline.svg';

import PineTreesNarrow from '../svg/pine-trees-narrow.inline.svg';
import PineTreesWide from '../svg/pine-trees-wide.inline.svg';
import PineTrees from '../svg/pine-trees.inline.svg';

import CampfireNarrow from '../svg/campfire-narrow.inline.svg';
import CampfireWide from '../svg/campfire-wide.inline.svg';
import Campfire from '../svg/campfire.inline.svg';

import Navbar from './Navbar';
import Footer from './Footer';
import Notify from './bigcommerce/Notify';
import './all.sass';
import './Layout.css';
import useSiteMetadata from './SiteMetadata';

const Passthrough = ({ children }) => <>{children}</>;

const TemplateWrapper = ({
  children,
  isStatic,
  location,
  description,
  lang = 'en',
  meta = [],
  image,
  title,
  type,
}) => {
  const siteMetadata = useSiteMetadata();
  const metaTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const metaImage = image
    ? `${siteMetadata.siteUrl}${image}`
    : siteMetadata.siteImage;
  const canonical =
    location && location.pathname
      ? `${siteMetadata.siteUrl}${location.pathname}`
      : null;
  const parallaxRef = useRef();
  const [bannerOffset, setBannerOffset] = useState(0.5);
  const SceneWrapper = isStatic ? Passthrough : Parallax;
  const Scene = isStatic ? Passthrough : ParallaxLayer;
  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      const base = innerWidth <= 768 ? 600 : innerWidth <= 1408 ? 1000 : 1500;
      const offset = ((innerWidth / base) * 600) / innerHeight;
      const newBannerOffset = Math.min(Math.max(offset, 0), 0.65);
      setBannerOffset(newBannerOffset);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={metaTitle}
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/img/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            sizes: '32x32',
            href: '/img/favicon-32x32.png',
            type: 'image/png',
          },
          {
            rel: 'icon',
            sizes: '16x16',
            href: '/img/favicon-16x16.png',
            type: 'image/png',
          },
          {
            rel: 'mask-icon',
            href: '/img/safari-pinned-tab.svg',
            color: '#ff4400',
          },
          ...(canonical ? [{ rel: 'canonical', href: canonical }] : []),
        ]}
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
          { name: 'description', content: metaDescription },
          { name: 'keywords', content: siteMetadata.keywords },
          { name: 'theme-color', content: '#fff' },
          { property: 'og:title', content: metaTitle },
          { property: 'og:description', content: metaDescription },
          { property: 'og:image', content: metaImage },
          ...(canonical ? [{ property: 'og:url', content: canonical }] : []),
          ...(type ? [{ property: 'og:type', content: type }] : []),
          ...(location.pathname === '/'
            ? [{ property: 'og:type', content: 'business.business' }]
            : []),
          { name: 'twitter:title', content: metaTitle },
          { name: 'twitter:description', content: metaDescription },
          { name: 'twitter:image', content: metaImage },
          { name: 'twitter:card', content: 'summary_large_image' },
        ].concat(meta)}
      />
      <Notify />
      <BackgroundNarrow className="scene-image is-hidden-tablet" />
      <Background className="scene-image is-hidden-mobile is-hidden-fullhd" />
      <BackgroundWide className="scene-image is-hidden-touch is-hidden-desktop-only is-hidden-widescreen-only" />
      <SceneWrapper
        ref={parallaxRef}
        pages={3}
        scrolling="false"
        config={{
          mass: 1,
          tension: 170,
          friction: 26,
          clamp: true,
          precision: 0.01,
          velocity: 0,
        }}
      >
        <div
          className="scene-frame"
          style={
            isStatic
              ? {
                  maxHeight: '100px',
                  overflow: 'hidden',
                }
              : {}
          }
        >
          <Scene offset={0} speed={-0.6}>
            <PineTreesNarrow className="scene-image is-hidden-tablet" />
            <PineTrees className="scene-image is-hidden-mobile is-hidden-fullhd" />
            <PineTreesWide className="scene-image is-hidden-touch is-hidden-desktop-only is-hidden-widescreen-only" />
          </Scene>
          <Scene offset={0} speed={-0.3}>
            <CampfireNarrow className="scene-image is-hidden-tablet" />
            <Campfire className="scene-image is-hidden-mobile is-hidden-fullhd" />
            <CampfireWide className="scene-image is-hidden-touch is-hidden-desktop-only is-hidden-widescreen-only" />
          </Scene>
          <Scene offset={0} speed={0}>
            <Navbar />
          </Scene>
        </div>
        {cloneElement(children, { bannerOffset })}
        <Scene offset={2.96} speed={0}>
          <Footer />
        </Scene>
      </SceneWrapper>
    </>
  );
};

export default TemplateWrapper;
