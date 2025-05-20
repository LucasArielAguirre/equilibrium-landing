import * as motion from "motion/react-client"
import { useLanguage } from "../lenguage/LanguageContext"

const Navbar = () => {
    const { lang, toggleLang } = useLanguage();
    const { t } = useLanguage();
  return (
    <motion.nav 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 2.2 }}
    exit={{ opacity: 0, y: -50 }}
    className="bg-black text-white w-full p-4 flex justify-between h-12 items-center align-middle border-b decoration-white font-inter ">
      <ul className="flex flex-row gap-4 font-italic items-center w-full justify-center">
        <li className="py-2 px-4 hover:scale-105 transition-all ">
          <a href="/">{t("home")}</a>
        </li>
        <li className="py-2 px-4 hover:scale-105 transition-all ">
          <a href="/about">{t("about")}</a>
        </li>
         <li className="py-2 px-4 hover:scale-105 transition-all">
        <a href="/contact">{t("contact")}</a>
        </li>
    </ul>
    <button onClick={toggleLang} className="bg-white text-black px-3 py-1 rounded">
        {lang === "en" ? "ES" : "EN"}
      </button>
</motion.nav>
  )
}

export default Navbar