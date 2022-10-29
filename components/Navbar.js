import React from "react";
import mapIcon from "../public/assets/map-icon.svg";
import searchIcon from "../public/assets/search.svg";
import storesIcon from "../public/assets/nearby-store.svg";
import cartIcon from "../public/assets/cart.svg";
import loginIcon from "../public/assets/login.svg";
import kingIcon from "../public/assets/king-deals.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
export const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <Link href="/">
        <img src=" /assets/bklogo.png" alt="bk-logo" className={styles.logo} />
      </Link>

      <div className={styles["location-cont"]}>
        <Image
          src={mapIcon}
          alt="map icon"
          // width={500} automatically provided
          // height={500} automatically provided
        />

        <p className={styles.location}>some location</p>
      </div>
      <div className={styles.links}>
        <div className={styles["side-cont"]}>
          <Image
            src={storesIcon}
            alt="side-icons"
            // width={500} automatically provided
            // height={500} automatically provided
          />
          <Link href="/">
            <p className={styles.text}>NEARBY STORES</p>
          </Link>
        </div>
        <div className={styles["side-cont"]}>
          <Image
            src={kingIcon}
            alt="side-icons"
            // width={500} automatically provided
            // height={500} automatically provided
          />
          <Link href="/">
            <p className={styles.text}>KING DEALS</p>
          </Link>
        </div>
        <div className={styles["side-cont"]}>
          <Image
            src={loginIcon}
            alt="side-icons"
            // width={500} automatically provided
            // height={500} automatically provided
          />
          <Link href="/">
            <p className={styles.text}>LOGIN</p>
          </Link>
        </div>
        <div className={styles["side-cont"]}>
          <Image
            src={cartIcon}
            alt="side-icons"
            // width={500} automatically provided
            // height={500} automatically provided
          />
          <Link href="/">
            <p className={styles.text}>CART</p>
          </Link>
        </div>
        <div className={styles["search-icon"]}>
          <Image
            src={searchIcon}
            alt="search icon"
            // width={500} automatically provided
            // height={500} automatically provided
          />
        </div>
      </div>
    </navbar>
  );
};
