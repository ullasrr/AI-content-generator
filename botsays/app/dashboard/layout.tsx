import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"], // Optional: specify weights you want
  display: "swap", // Optional: font display strategy
})

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${outfit.variable} font-outfit antialiased bg-gray-100 min-h-screen`}>
      <div className='md:w-64 hidden md:block fixed ' > <SideNav/>  </div>
        <div className='md:ml-64'>
            <Header/>
      {children}
              
           
        </div>
        

    </div>
  )
}

export default layout
