import * as motion from "motion/react-client"

const Welcome = () => {
  return (
    <section className="w-full flex h-screen bg-black text-white items-center justify-center px-4">
        <div className="max-w-4xl w-full space-y-8 text-center">
            <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-7xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Welcome, your financial Application</motion.h1>
            <motion.p 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Organize your income, track your expenses, and receive personalized recommendations to improve your financial health.</motion.p>
            <div className="flex gap-4 justify-center mt-8">
                <motion.button 
                initial={{opacity: 0, background: "black", color: "white"}}
                animate={{opacity: 1, background: "white", color: "black"}}
                transition={{ duration: 0.5, delay: 1.5 }}
                exit={{ opacity: 0, background: "black", color: "white" }}
                className="py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">Information</motion.button>
                <motion.button 
                  initial={{opacity: 0, background: "white", color: "black"}}
                  animate={{opacity: 1, background: "black", color: "white"}}
                  transition={{ duration: 0.5, delay: 2 }}
                  exit={{ opacity: 0, background: "black", color: "white" }}
                className="py-3 px-6 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">Contact Us</motion.button>
            </div>
        </div>
    </section>
  )
}

export default Welcome;