'use client'
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/Title"
import { home, strategy } from "@/public/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import Brand from "@/components/FAQs"
import { Card2, Card3 } from "@/components/Card"
import Image from "next/image"
import Text from "@/components/Text"
import { FaDotCircle } from "react-icons/fa"
import { DotIcon } from "@/public/assets/icons/icons"
import FAQs from "@/components/FAQs"


export default function Home() {
  return (
    <> 
     <section className='hero relative opacity-[.88] bg-[#398634]'>
        {/* <img src="/assets/images/firm.jpg" alt="carousel?" className="absolute left-0 top-0 opacity-75 z-[-1]" /> */}
      <div className='sass-container flex gap-x-8 justify-around items-center h-full  !text-left '>
      <Title title='Become an Innovation Leader - Measurable Results Through Decentralized Innovation' 
      className={'!text-light w-[50pc] !text-[2.7rem]  '}
      />
        <img src={'/assets/images/logo.png'} alt="capital growth academy" />
      </div>
    </section>
    <section className='hero-sec '>
    <div className='sass-container pb-24 '>
    
        <div className='heading-title !text-3xl  !text-dark'>
          <div
          className="flex w-full justify-center"
          >
            <div
            className="flex gap-x-1"
            >
          <Title title='Corporate Innovation needs' />
          <div className="px-2 py-4 bg-[#7cdb7c73]" >
          <Title title=' to change' />
              
            </div>
          </div>
          </div>
          <div className="pt-16" >
            <div className="grid-3  mb-20">

          <Card2
            details={'of CEOs believe innovation is critical'}
            percent={84}
            />
            <Card2
            details={'of business models are at risk'}
            percent={80}
            />
            <Card2
            details={'of CEOs are satisfied with their innovation performance'}
            percent={6}
            />
            </div>
            <span
            className="text-center text-lg"
            >
The time of putting a bunch of creative 'Corporate Pirates' in a colorful 
innovation hub expecting them to deliver a new flagship product must be 
over. Instead, corporate innovation performance requires a data-driven, monitored and structured approach.
            </span>
          </div>
        </div>
          {/* <div
        className="grid-4 pt-8 pb-28"
        >

                    {home.map((item, i) => (
            <div className='box' key={i}>
              <span className='green'>{item.icon}</span> <br />
              <br />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div> */}
        </div>
        <div
        className="bg-primary-300  py-20 px-8 "
        >
          <div
          className="sass-container "
          >
          <Title title='Innovation as a discipline'
          className={'!text-light text-center pb-10'}
          />
          <div
            className="w-full text-center text-light pb-8"
            >
    It is high time to treat corporate innovation as a discipline by activating an 
    Innovation Operating System with clear KPIs, Reporting and Monitoring.
            </div>

            <div
            className="bg-primary-200 my-8 p-6 rounded-2xl "
            >
              <Text
              text={'Company Strategy'}
              className={'!text-[#b5e9b5ad]'}
              />
             <div
            className="bg-primary-100 p-6 rounded-2xl mt-4 "
             >
              <Text
              text={'Innovation Strategy'}
              className={'!text-[#b5e9b5ad]'}
              />
              <div
            className="bg-primary-300 p-6 rounded-2xl mt-4 border border-[#b6ebb6e0] "
              
              >
                <div
                className={'flex justify-between w-full '}
                >
                <Text
              text={'Innovation OS'}
              className={'text-light'}

              />
              <img src="/assets/images/logo.png" className="w-[2em]" alt="" />
                </div>
                <div
                className="grid gap-3 m-10"
                >
                  <div
                  className="p-6 bg-light rounded-lg"
                  >
                    <Title
        className={'text-xl font-bold'}

                    title={'INNOVATION ACCOUNTING'}
                    />
                    <Text
                    text={'Monitor & Report'}
                    className={'text-dark'}
                    />
                  </div>
                  <div
                  className="grid-3 gap-x-4"
                  >
                    <Card3
                    title={'EXPLORE'}
                    sub_title={'Find Opportunities'}
                    details={strategy}
                    tag
                    kickbox
                    card_one
                    />
                    <Card3
                    title={'EXPLOIT'}
                    sub_title={'Maximize ROI'}
                    details={strategy}
                    tag
                    ideahub
                    card_two
                    />
                    <Card3
                    title={'OPEN INNOVATION'}
                    sub_title={'Leverage your Ecosystem'}
                    details={strategy}
                    />

                  </div>
                </div>
              </div>
             </div>
            </div>
            <div
            className="text-center pt-6 "
            >
            <Text
              className={'!text-light'}
            text={'The INNO OS is customized to your strategy by putting different modules in place based on your goals and needs.'}
            />
            </div>
            </div>
        </div>
        <div
        className=" border border-b-[#3734352b] "
        >
        <div
        className="grid-2 pt-20 pb-24 sass-container"
        >
          <img src="/assets/images/kick_box.png" alt="" />
          <div>
            <span
            className="pb-4 text-primary-200"
            >
              Our FlagShip Product for Exploration
            </span>
              <img src="/assets/images/kickbox_logo.png" alt="" className="pt-4 pb-10" />

              <Text
              text = 'An end-to-end solution for employee engagement,idea management and idea execution. Our KICKBOX concept is based on a proven methodology used by 1000+ companies globally.'
              className={'text-dark'}
              />
              <div
              className="flex gap-x-2 items-center pt-10"
              >
                <DotIcon
                color={'#373435'}
                />
                <Text
              text = 'Swisscom created 10 spin-offs'
              className={'text-dark'}
              />
              </div>
              <div
              className="flex gap-x-2 items-center"
              >
                <DotIcon
                color={'#373435'}
                />
                <Text
              text = 'Siemens Energy issued 12 patents'
              className={'text-dark'}
              />
              </div>
              <div
              className="flex gap-x-2 items-center pb-10"
              >
                <DotIcon
                color={'#373435'}
                />
                <Text
              text = 'A retailer saved 6.5 millions'
              className={'text-dark'}
              />
              </div>
              <button
              className="bg-primary-300 rounded-md py-2 px-5 "
              >
              <Text
              text = 'Discover KICKBOX'
              className={' text-sm !text-light'}
              />
              
              </button>

          </div>
        </div>
        </div>
    <Testimonial />
      {/* <Expertise /> */}


    {/* <div className='sass-container'>
        
        <div className='hero-content grid-3 px-[5em]'>
          {home.map((item, i) => (
            <div className='box' key={i}>
              <span className='green'>{item.icon}</span> <br />
              <br />
              <h3>{item.title}</h3>
            </div>
          ))}
                <Card2
            details={'of CEOs believe innovation is critical'}
            percent={80}
            />
            <Card2
            details={'of business models are at risk'}
            percent={80}
            />
            <Card2
            details={'of CEOs are satisfied with their innovation performance'}
            percent={80}
            />

        </div>
       
      </div> */}
    </section>
   
    {/* <Banner /> */}
    {/* <ShowCase /> */}
    <FAQs />

    {/* <div className='text-center'>
      <Title title='Latest news & articles' />
    </div>
    <BlogCard /> */}
  </>
  );
}
