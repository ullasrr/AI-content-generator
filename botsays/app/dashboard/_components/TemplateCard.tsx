import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`} className="bg-white rounded-xl shadow-md p-6 hover:scale-109 transition-all duration-300 w-full sm:w-[300px] cursor-pointer">

    
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={item.icon}
          alt="icon"
          width={50}
          height={50}
          className="rounded-md"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
          <p className="text-sm text-gray-500 capitalize">{item.category}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    
    </Link>
  );
}

export default TemplateCard
