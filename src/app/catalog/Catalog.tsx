"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./Catalog.module.scss";

const Catalog: FC = () => {
  return (
    <div className={styles.div}>
      <h1 className={styles.heading}>Catalog Page</h1>
      <Image
        src={"/next.svg"}
        alt='Image'
        width={200}
        height={200}
      />
    </div>
  );
};
export default Catalog;
