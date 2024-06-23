import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
      
    
        <Link href={'/'} className='w-36'>
           <Image src={'/assets/image/4019733.png'} width={60} height={38} alt='Evently logo'/>
        </Link>

        <SignedIn>
          <nav className='md:flex-between  w-full max-w-xs hidden'>
            <NavItems/>
          </nav>
        </SignedIn>

        <div className='flex w-32 justify-end'>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size={"lg"}>
              <Link href={'/sign-in'}>
              Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
