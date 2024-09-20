import React from 'react';
import styles from './Navbar.module.css'; 

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
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>

  </>
  )
}

export default Navbar
