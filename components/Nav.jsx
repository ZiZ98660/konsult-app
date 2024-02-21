"use client";

import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import "@/styles/globals.css";


const Nav = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='sass-container'>
          <div className='logo'>
            <Link href='/'>
              {/* <TitleLogo title='creative' caption='7' className='logomin' /> */}
              <img src={'/assets/images/logo.png'} className="w-[1.5em]" alt="capital growth academy" />
            </Link>
          </div>
          <nav className={` flex  ${open ? "openMenu" : "closeMenu"}`} onClick={() => setOpen(null)}>
            <div
            // className="max-[800px]:hidden"
            className="flex justify-center"
            >
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Solutions
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              About us
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Resources
            </Link>
            {/* <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link> */}
            {/* <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link> */}
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            {/* <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link> */}
            </div>
          </nav>
            <button className='button-primary  max-[1300px]:place-self-center max-[1300px]:w-[50%]  '>get started today</button>
          <button className=" invisible max-[800px]:block" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
};

export default Nav;
