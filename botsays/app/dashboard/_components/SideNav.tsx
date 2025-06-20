'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation';

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Pricing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Settings',
            icon:Settings,
            path:'/dashboard/setting'
        }
    ];

    const path = usePathname();

    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen w-64 bg-white border-r border-gray-200 shadow-sm fixed left-0 top-0 z-40'>
        {/* Logo Section */}
        <div className='flex justify-center items-center py-8 px-6 border-b border-gray-100'>
            <Image 
                src={'/logo.svg'} 
                width={75} 
                height={100}  
                alt='logo'
                className='hover:scale-105 transition-transform duration-300 ease-in-out'
            />
        </div>

        {/* Navigation Menu */}
        <nav className='px-4 py-6'>
            <div className='space-y-2'>
                {MenuList.map((menu, index) => {
                    const isActive = path === menu.path;
                    return (
                        <div 
                            key={index}
                            className={`
                                flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ease-in-out group relative
                                ${isActive 
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                                    : 'hover:bg-gray-50 hover:shadow-md'
                                }
                            `}
                        >
                            {/* Active indicator */}
                            {isActive && (
                                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full'></div>
                            )}
                            
                            <menu.icon 
                                className={`
                                    w-5 h-5 transition-colors duration-200 flex-shrink-0
                                    ${isActive 
                                        ? 'text-white' 
                                        : 'text-gray-500 group-hover:text-indigo-600'
                                    }
                                `} 
                            />
                            
                            <h2 className={`
                                ml-4 font-medium transition-colors duration-200
                                ${isActive 
                                    ? 'text-white' 
                                    : 'text-gray-700 group-hover:text-indigo-600'
                                }
                            `}>
                                {menu.name}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </nav>

        {/* Bottom Section (Optional) */}
        {/* <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100'>
            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center'>
                <div className='text-sm text-gray-600 mb-1'>Need help?</div>
                <button className='text-xs text-indigo-600 hover:text-indigo-700 font-medium'>
                    Contact Support
                </button>
            </div>
        </div> */}
    </div>
  )
}

export default SideNav