
import { useState } from "react";
import { useLanguage } from "../lenguage/LanguageContext";

export default function InfoRequestForm() {
    const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full h-[500px]  flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold mb-5 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">{t("formTitle")}</h1>
    <div className="max-w-md mx-auto p-15 bg-gradient-to-r from-white to-gray-500 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">{t("formSubtitle")}</h2>
      {submitted ? (
        <p className="text-green-400 font-medium text-center">
          {t("thanks")}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("name")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-500 to-black text-white py-2 px-4 rounded-md hover:scale-105 transition-all duration-150 cursor-pointer"
          >
            {t("send")}
          </button>
        </form>
      )}
    </div>
    </div>
  );
}
