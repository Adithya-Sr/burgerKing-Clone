import Head from "next/head";
import { Fragment } from "react";
import { Navbar } from "../components/Navbar";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>BurgerKing India|Online ordering</title>
        <meta name="description" content="Burger King-Home" />
        <link rel="icon" href="/assets/bklogo.png" />
      </Head>
      <Navbar></Navbar>
    </Fragment>
  );
}
