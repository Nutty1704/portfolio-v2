import Link from "next/link";
import NavbarAnimations from "./NavbarAnimations";
import Hamburger from "./Hamburger";
import NavItem from "./NavItem";

export const links = [
  { text: "Home", href: "#hero" },
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <>
      <NavbarAnimations />
      <nav
        id="navbar"
        className="fixed top-0 w-full border-b border-gray-100 bg-white z-50"
      >
        <div className="p-4 container mx-auto flex justify-between items-center">
          <Name />
          <ul className="hidden md:flex items-center gap-8 text-gray-600">
            {links.map(({ text, href }) => (
              <NavItem key={href} text={text} href={href} className='hover:text-gray-900 transition-colors' />
            ))}
          </ul>
        </div>
      </nav>

      <Hamburger />
    </>
  );
};

const Name = () => {
  return <div className="text-xl font-bold">Abhijit Upadhyay</div>;
};

export default Navbar;
