import { LineMdGithub } from "../icons/github"


const footer = () => {
  return (
    <footer className="grid grid-cols-3 w-full h-32 bg-black text-white border-t decoration-gray-300 font-inter justify-center items-center">
        
        <ul className="flex flex-col gap-2 items-center justify-center text-xs">
            <li className="text-3xl">EQUILIBRIUM</li>
            <li className="flex"> 
              <a className="flex items-center gap-2 hover:text-gray-300 transition-all cursor-pointer" href="https://github.com/LucasArielAguirre/equilibrium-landing" target="_blank">
              <LineMdGithub/> NUESTRO GITHUB
            </a>
            </li>
            
        </ul> 
        
        <ul className="flex flex-col gap-2 items-center justify-center text-xs">
            <li>Activities</li>
            <li>Text3 </li>
            <li>Text3 </li>
        </ul> 
     
        <ul className="flex flex-col gap-2 items-center justify-center text-xs">
            <li>Activities</li>
            <li>Text3 </li>
            <li>Text3 </li>
        </ul> 
        
       
    </footer>
  )
}

export default footer