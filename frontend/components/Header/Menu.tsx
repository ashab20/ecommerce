import Link from "next/link";


const Menu = () => {
  return (
    <ul className="flex mt-2 justify-center">
      <li className="MenuItem">
        <Link href="/"> New</Link>
      </li>
      <li className="MenuItem">
        <Link href="/about"> Best</Link>
      </li>
      <li className="MenuItem">
        <Link href="/about"> Man</Link>
      </li>
      <li className="MenuItem">
        <Link href="/about"> Woman</Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">Kids </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about"> Login</Link>
      </li>
    </ul>
  );
};

export default Menu;
