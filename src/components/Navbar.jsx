import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-gray-100 bg-white/80 backdrop:blur-md z-50">
      <div className="p-4 container mx-auto flex justify-between items-center">
        <Name />
        {/* TODO: make resposive */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600">
          <li className="hover:text-gray-900 transition-colors">
            <Link href="#hero">Home</Link>
          </li>  
          <li className="hover:text-gray-900">
            <Link href='#about'>About</Link>
          </li>  
          <li className="hover:text-gray-900">
            <Link href='#projects'>Projects</Link>
          </li>  
          <li className="hover:text-gray-900">
            <Link href='#experience'>Experience</Link>
          </li>  
          <li className="hover:text-gray-900">
            <Link href='#contact'>Contact</Link>
          </li>  
        </ul>
      </div>
    </nav>
  )
}

const Name = () => {
  return (
    <div className="text-xl font-bold">
      Abhijit Upadhyay
    </div>
  )
}

export default Navbar