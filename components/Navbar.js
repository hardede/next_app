import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  {
    id: "home",
    link: "/",
    title: "Home",
  },
  {
    id: "posts",
    link: "/posts",
    title: "Posts",
  },
  {
    id: "contacts",
    link: "/contacts",
    title: "Contacts",
  },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="hardede" />
      </div>
      <div className={styles.links}>
        {navigation.map(links => (
          <Link href={links.link} key={links.id}>
            <a className={pathname === links.link ? styles.active : null}>
              {links.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
