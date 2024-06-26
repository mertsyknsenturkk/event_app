import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
     <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row  '>
      <Link href={"/"}>
      <Image
            alt='logo'
            width={100}
            height={38}
            src={'/assets/image/4019733.png'}     />
      </Link>
      <p>2023 Evently. All Rights reserved</p>
     </div>
    </footer>
  )
}

export default Footer
