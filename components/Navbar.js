import React from "react";
import Link from "next/link";
import styles from '../components/layout.module.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a className={styles.link}>HomePage</a>
        </Link>
        <br />
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
