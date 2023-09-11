import { Typography } from "@material-tailwind/react";
 
const Footer = () => {
  return (
      <div className="bg-gray-300">
          <div className="max-w-[1200px] flex mx-auto items-center">
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center md:justify-between">
    <p className="text-black">
      &copy; 2023 Manuela De Luca
    </p>
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
    <a href="#"><li className="text-black hover:font-bold">About Us</li></a>
    <a href="#"><li className="text-black hover:font-bold">About Us</li></a>
    <a href="#"><li className="text-black hover:font-bold">About Us</li></a>
    <a href="#"><li className="text-black hover:font-bold">About Us</li></a>

    </ul>
  </footer>
  </div>
  </div>
  )
}

export default Footer