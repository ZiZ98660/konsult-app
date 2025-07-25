import React from "react"
import { Title } from "@/components/Title"
import { showcase } from "@/public/assets/data/dummydata"
import { Card } from "@/components/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='sass-container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
