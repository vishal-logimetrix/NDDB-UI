import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  
  const styles = {
    html: {
      minHeight: '100%',
    },
    body: {
      boxSizing: 'border-box',
      height: '70vh',
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      fontFamily: "'Inconsolata', Helvetica, sans-serif",
      fontSize: '1.5rem',
      color: 'rgba(128, 255, 128, 0.8)',
      textShadow: '0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8)',
      position: 'relative',
      overflow: 'hidden',
    },
    noise: {
      pointerEvents: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: 'url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,
      opacity: 0.02,
    },
    overlay: {
      pointerEvents: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background:
        'repeating-linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%)',
      backgroundSize: 'auto 4px',
      zIndex: 1,
    },
    overlayBefore: {
      content: '""',
      pointerEvents: 'none',
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(0deg, transparent 0%, rgba(32, 128, 32, 0.2) 2%, rgba(32, 128, 32, 0.8) 3%, rgba(32, 128, 32, 0.2) 3%, transparent 100%)',
      backgroundRepeat: 'no-repeat',
      animation: 'scan 7.5s linear infinite',
    },
    terminal: {
      boxSizing: 'inherit',
      position: 'relative',
      height: '100%',
      maxWidth: '1000px',
      padding: '4rem',
      textTransform: 'uppercase',
      zIndex: 2,
    },
    output: {
      color: 'rgba(128, 255, 128, 0.8)',
      textShadow: '0 0 1px rgba(51, 255, 51, 0.4), 0 0 2px rgba(255, 255, 255, 0.8)',
    },
    errorcode: {
      color: '#fff',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.noise}></div>
      <div style={styles.overlay}>
        <div style={styles.overlayBefore}></div>
      </div>
      <Container style={styles.terminal}>
        <h1>
          Error <span style={styles.errorcode}>404</span>
        </h1>
        <p style={styles.output}>
          <span>&gt; </span>
          The page you are looking for might have been under development, removed, had its name changed or is temporarily unavailable.
        </p>
        <p style={styles.output}>
          <span>&gt; </span>
          Please try to{' '}
          <Link to={-1} style={styles.link}>
            go back
          </Link>{' '}
          or{' '}
          <Link to="/" style={styles.link}>
            return to the homepage
          </Link>
          .
        </p>
        <p style={styles.output}>
          <span>&gt; </span>
          Good luck.
        </p>
      </Container>
    </div>
  );
};

export default PageNotFound;


