import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}

function TemplateListSection({userSearchInput}:any) {
  useEffect(() => {
    console.log(userSearchInput);
    if(userSearchInput){
      const filterData= Templates.filter(item=> {
          return item.name.toLowerCase().includes(userSearchInput.toLowerCase()) 
      });
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Templates);
    }
},[userSearchInput])

const [templateList, setTemplateList] = useState(Templates);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {templateList.map((item:TEMPLATE,index:number)=>(
            <TemplateCard key={index} {...item} />
        ))}
    </div>
  )
}

export default TemplateListSection
