import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoImage from '../../public/images/logo.png'
import styles from './Header.module.css'

// Window size hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  // This effect only runs on mount
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Header = () => {


  const size = useWindowSize()

  function getImgWidth(){
    if(size.width <= 375)
      return 375;
    else if(size.width <= 450)
      return 400;
    return 500;
  }

  function getImgHeight(){
    if(size.width <= 375)
      return 100;
    else if(size.width <= 450)
      return 115;
    return 129;
  }


  return (
    <header className={styles.header}>
      <Image src={logoImage} alt="Alliance logo" /*placeholder="blur"*/ priority width={getImgWidth()} height={getImgHeight()} />      
    </header>
  )
}

export default Header
