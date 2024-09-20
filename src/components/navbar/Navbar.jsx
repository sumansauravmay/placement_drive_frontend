import React from 'react';
import styles from './Navbar.module.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
<nav className={styles.navbar}>
  <h1>Logo</h1>
  <ul className={styles.menu}>
    <li>
      <span className={styles.product}>Product</span>
      <div className={styles.megamenu}>
        <div className={styles.column}>
         <h3>Women</h3>
         <ul className={styles.menuitem}>
         <li>1</li>
         <li>2</li>
         </ul>
        </div>

        <div className={styles.column}>
          <h3>Men</h3>
          <ul className={styles.menuitem}>
          <li>1</li>
          <li>2</li>
          </ul>
        </div>
      </div>
    </li>
    <Link to="/signup">
    <li>Signup</li>
    </Link>
    <Link to="/reactmemo">
    <li>Memo</li>
    </Link>
   
  </ul>
</nav>

  </>
  )
}

export default Navbar
