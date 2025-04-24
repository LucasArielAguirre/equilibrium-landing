import * as motion from "motion/react-client"
const Navbar = () => {
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 2.2 }}
    exit={{ opacity: 0, y: -50 }}
    className="bg-black text-white w-full p-4 flex justify-between h-12 items-center align-middle border-b decoration-white font-inter ">
      <ul className="flex flex-row gap-4 font-italic items-center w-full justify-center">
        <li className="py-2 px-4 hover:scale-105 transition-all ">
          <a href="/">HOME</a>
        </li>
        <li className="py-2 px-4 hover:scale-105 transition-all ">
          <a href="/about">ABOUT</a>
        </li>
         <li className="py-2 px-4 hover:scale-105 transition-all">
        <a href="/contact">CONTACT</a>
        </li>
    </ul>
</motion.nav>
  )
}

export default Navbar