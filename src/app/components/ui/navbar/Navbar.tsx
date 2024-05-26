import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import NavItem from "./NavItem";

const Navbar: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_div}>
        <Link href='/'>
          {" "}
          <h1 className='text-3xl font-bold text-violet-600'>
            NextJS e-commerce
          </h1>
        </Link>
        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {menu.map(item => (
            <NavItem
              key={item.link}
              item={item}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
