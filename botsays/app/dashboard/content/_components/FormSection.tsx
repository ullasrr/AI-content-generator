'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface Props {
    selectedTemplate?: TEMPLATE;
    userFormInput:any
}

const FormSection = ({ selectedTemplate, userFormInput }: Props) => {

    const [formData, setformData] = useState<any>();

    const handleInputChange = (event:any) => {
        console.log(event.target.value);
        const {name,value}=event.target;
        setformData({...formData,[name]:value});
    }

    const onSubmit=(e:any)=>{
        e.preventDefault();
        console.log(formData);
        userFormInput(formData);
    }

    return (
        <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-3xl shadow-lg border border-indigo-100 max-w-lg mx-auto hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="flex items-center gap-5">
                <Image
                    src={selectedTemplate?.icon || '/placeholder.png'}
                    alt="icon"
                    width={50}
                    height={50}
                    className="rounded-lg bg-indigo-100 p-1 shadow-sm"
                />
                <h2 className="text-2xl font-bold text-indigo-800">
                    {selectedTemplate?.name}
                </h2>
            </div>

            <p className="mt-6 text-gray-700 text-base leading-relaxed">
                {selectedTemplate?.desc}
            </p>


            <form className="mt-6 space-y-6" onSubmit={onSubmit}>
  {selectedTemplate?.form?.map((item, index) => (
    <div key={index} className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {item.label}
        {item.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {item.field === 'input' ? (
        <Input
          name={item.name}
          required={item.required}
          onChange={handleInputChange}
          placeholder={`Enter ${item.label.toLowerCase()}`}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : item.field === 'textarea' ? (
        <textarea
          name={item.name}
          required={item.required}
          onChange={handleInputChange}
          placeholder={`Enter ${item.label.toLowerCase()}`}
          rows={4}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      ) : null}
    </div>
  ))}
  <button type="submit" className="w-full mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
    Generate Content
  </button>
</form>



            {/* Add form inputs or content here */}
        </div>
    )
}

export default FormSection
