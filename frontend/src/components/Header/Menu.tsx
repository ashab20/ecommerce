import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex mt-2 justify-center text-center items-center">
      <li className="MenuItem">
        <Link href="/product">
          <a>Product</a>
        </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">
          <a>Best</a>
        </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">
          <a>Man</a>
        </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">
          <a>Woman</a>
        </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">
          <a>Kids</a>
        </Link>
      </li>
      <li className="MenuItem">
        <Link href="/about">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
