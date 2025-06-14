

import { useLanguage } from "../lenguage/LanguageContext";
const Contact = () => {
    const { t } = useLanguage();
  return (
    <section className="w-full h-[240px] bg-[url('/01-lan.avif')] bg-cover text-white flex flex-col justify-center items-center font-inter border-gray-500 border-t border-b">
        <div className="bg-black/90 w-full h-full flex  flex-col justify-center items-center">
            <h1 className="text-2xl font-inter">{t("contactSlogan")}</h1>
            <button className="bg-black border border-white py-2 px-4 cursor-pointer rounded-xl hover:scale-105 transition-all mt-2">{t("contactButton")}</button>
        </div>
    </section>
  )
}

export default Contact