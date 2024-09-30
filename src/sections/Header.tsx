import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-md bg-white/10">
        <Link href="#home" className="nav-items">
          Home
        </Link>
        <Link href="#about" className="nav-items">
          About
        </Link>
        <Link href="#experience" className="nav-items">
          Experience
        </Link>
        <Link href="#projects" className="nav-items">
          Projects
        </Link>
        <Link
          href="#contact"
          className="nav-items bg-white text-gray-900 hover:bg-white-70 "
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
