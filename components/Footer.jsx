import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin, AiFillMessage,} from "react-icons/ai"
import {FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer
      className="bg-[#a0d9a2]"
      >
        <div className='sass-container  '>
          <div className='grid-4'>
            <div className='logo'>
            <img src={'/assets/images/logo.png'} className="w-[3.5em] mx-auto mb-4" alt="capital growth academy" />

              {/* <div
              className="!text-[14px] !text-[#141a15a1] pb-10 grid gap-y-6"
              >
                <div
                className="flex gap-x-2 "
                >
                  {<FaMapMarkerAlt
                  size={'22px'}
                  color="#2fca96"
                  />}
                  <span
                  // className="!w-[25pc] "
                  >PLOT 808 AKIN MATEOLA STREET, AMUWO-ODOFIN G.R.A, LAGOS, NIGERIA</span>
                </div>
                <div
                className="flex gap-x-2"
                >
                  {<FaPhone
                  color="#2fca96"

                  // size={'25px'}
                  />}
                  <span>
                  +234 708 645 8308, +234 706 247 5899
                  </span>
                </div>
                <div
                className="flex gap-x-2"
                >
                  {<FaEnvelope
                  color="#2fca96"

                  // size={'25px'}
                  />}
                  <span>
                  info@capitalgrowthacademy.com
                  </span>
                </div>
              </div> */}
              {/* <button className='button-primary'>Request for quote</button> */}
            </div>
            <ul>
              <h3>Solutions</h3>
              <li>
                <Link href='/'>KICKBOX</Link>
              </li>
              <li>
                <Link href='/'>Innovation Platform</Link>
              </li>
              <li>
                <Link href='/'>Methodology

</Link>
              </li>
              <li>
                <Link href='/'>Professional Services</Link>
              </li>
              <li>
                <Link href='/'>Strategic Support</Link>
              </li>
              {/* <li>
                <Link href='/'>Contact</Link>
              </li> */}
            </ul>
            <ul>
              <h3>Resources</h3>
              <li>
                <Link href='/'>KICKBOX</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Case studies</Link>
              </li>
              <li>
                <Link href='/'>Webinars</Link>
              </li>
              <li>
                <Link href='/'>LinkedIn</Link>
              </li>
            </ul>
            <ul>
              <h3>About Capital Growth</h3>
              {/* <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div> */}
              <li>
                <Link href='/'>About us</Link>
              </li>
              <li>
                <Link href='/'>Open positions</Link>
              </li>
              <li>
                <Link href='/'>FAQ</Link>
              </li>
              <li>
                <Link href='/'>Demo</Link>
              </li>
              <li>
                <Link href='/'>Get in contact</Link>
              </li>
              <li>
                <Link href='/'>Terms and conditions</Link>
              </li>
              <li>
                <Link href='/'>Privacy policy</Link>
              </li>
              <li>
                <Link href='/'>G2 reviews</Link>
              </li>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span> CAPITAL GROWTH ACADEMY PLOT 808 AKIN MATEOLA STREET, AMUWO-ODOFIN G.R.A, LAGOS, NIGERIA</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
