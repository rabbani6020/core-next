import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="flex items-center h-24  bg-white text-black shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="font-bold text-3xl transition duration-500 hover:text-purple-900">
                Logo Here
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/">
                  <a className="font-semibold text-xl transition duration-300 hover:text-red-600">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <a className="font-semibold text-xl transition duration-300 hover:text-red-600">User List</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                <a className="font-semibold text-xl transition duration-300 hover:text-red-600">About</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                <a className="font-semibold text-xl transition duration-300 hover:text-red-600">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                <a className="font-semibold text-xl transition duration-300 hover:text-red-600">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
