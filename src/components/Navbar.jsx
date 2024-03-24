import { useState } from "react"

import { close, menu } from '../assets';

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "saccos",
    title: "Saccos",
  },
];


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState("Home")

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <p>SaccoSearch</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px]
          ${active === nav.title ? 'text-white' : 'text-dimWhite'}
          ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
          `} onClick={()=> setActive(nav.title)}>

            <a href={`#${nav.id}`}>{nav.title}</a>

          </li>
        ))}
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="" 
        className="w-[28px] h-[28px] object-contain"
        onClick={()=> setToggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'}
        p-6 bg-black-gradient absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px] 
          ${active === nav.title ? 'text-white' : 'text-dimWhite'}
          ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
          `} onClick={()=> setActive(nav.title)}>

            <a href={`#${nav.id}`}>
              {nav.title}</a>
          </li>
        ))}
      </ul>


        </div>
      </div>

    </nav>
  )
} 

export default Navbar