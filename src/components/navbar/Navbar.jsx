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
        <div className="px-4 py-3 container mx-auto flex justify-between items-center">
          <Name />
          <div id='nav-bar-btns-container' className="hidden md:block relative">
            {/* main buttons */}
            <ul className="flex items-center px-5 gap-4 text-gray-600">
              {links.map(({ text, href }) => (
                <NavItem key={href} text={text} href={href} className='px-4 py-1 anim-nav-buttons' /> // animate hover
              ))}
            </ul>
            {/* overlay */}
            <ul aria-hidden className="anim-nav-overlay absolute-center flex items-center px-5 gap-4 bg-primary text-primary-foreground">
              {links.map(({ text, href }) => (
                <NavItem key={href} text={text} href={href} className='px-4 py-1' />
              ))}
            </ul>
          </div>
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
