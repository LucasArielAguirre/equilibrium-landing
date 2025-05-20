import { useLanguage } from "../lenguage/LanguageContext";
const About = () => {
    const { t } = useLanguage();
  return (
    <section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center font-inter">
        <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">{t("aboutUs")}</h1>
        <div className="flex flex-row justify-between items-center w-[60%] mb-12">
            <div className="w-[50%]">
                <img className="w-[85%] h-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300" 
                    src="https://img.freepik.com/photos-premium/investissement-boursier-entrepreneur-homme-affaires-discutant-analyse-graphique-stock_18497-1122.jpg?semt=ais_hybrid" 
                    alt="Finance about application" />
            </div>
            <div className="w-[50%] space-y-4">
                <h2 className="text-3xl text-gray-300 font-semibold">{t("introduce")}</h2>
                <p className="text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti nobis consequatur autem perferendis officiis, ex vitae facere aspernatur excepturi ratione quae dolorum deserunt officia numquam quisquam velit delectus quia!</p>
            </div>
        </div>
        
        <div className="flex flex-row justify-between items-center w-[60%]">
            <div className="w-[50%] space-y-4">
                <h2 className="text-3xl text-gray-300 font-semibold">{t("protected")}</h2>
                <p className="text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti nobis consequatur autem perferendis officiis, ex vitae facere aspernatur excepturi ratione quae dolorum deserunt officia numquam quisquam velit delectus quia!</p>
            </div>
            <div className="w-[50%] flex justify-end">
                <img className="w-[85%] h-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300" 
                    src="https://img.freepik.com/photos-premium/investissement-boursier-entrepreneur-homme-affaires-discutant-analyse-graphique-stock_18497-1122.jpg?semt=ais_hybrid" 
                    alt="Finance about application" />
            </div>
        </div>
    </section>
  )
}

export default About