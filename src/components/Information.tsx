import * as motion from "motion/react-client";
import Crypto from "../icons/Crypto";
import { JSX } from "react";
import { useLanguage } from "../lenguage/LanguageContext";

interface CardProps {
  icon: string | JSX.Element;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-[#030303] py-16 px-5 text-black text-xl shadow-lg shadow-gray-300/60 border border-white/10 rounded-sm hover:scale-105 cursor-pointer transition-all hover:shadow-gray-300/30 flex flex-col items-center justify-center w-full">
      <div className="w-full h-full flex justify-center items-center">{icon}</div>
      <h1 className="text-gray-300 text-center mb-4 text-2xl">{title}</h1>
      <p className="text-gray-300 text-center text-sm">{content}</p>
    </div>
  );
};

const Information = () => {
  const { t } = useLanguage();

  const cardsData = [
    {
      icon: "📊",
      title: t("card1"),
      content: t("cardContent1"),
    },
    {
      icon: "💰",
      title: t("card2"),
      content: t("cardContent2"),
    },
    {
      icon: "📈",
      title: t("card3"),
      content: t("cardContent3"),
    },
    {
      icon: <Crypto />,
      title: t("card4"),
      content: t("cardContent4"),
    },
  ];

  return (
    <motion.section className="w-full h-screen bg-black text-white flex flex-col justify-center items-center font-inter">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent items-center"
      >
        {t("welcomeTitle")}
      </motion.h1>
      <div className="grid grid-cols-2 gap-2 m-5 w-[50%]">
        {cardsData.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} content={card.content} />
        ))}
      </div>
    </motion.section>
  );
};

export default Information;
