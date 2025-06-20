'use client'
import React, { useEffect, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'

interface Props {
  params:Promise< {
    // ✅ Use string literal key with quotes to allow hyphen
    'template-slug': string;
  }>;
}


 
function CreateNewContent({params}: Props) {
    
  const {'template-slug':slug} = React.use(params);


  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === slug
  );

  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  
  const GenerateAIContent= async(formData:any) => {
    const SelectedPrompt= selectedTemplate?.aiPrompt;
    // formData['prompt'] = SelectedPrompt;

    // const FinalAIPrompt=JSON.stringify(formData)+","+SelectedPrompt ;
    const FinalAIPrompt = `
User Input:
${Object.entries(formData as Record<string, string>)
  .map(([key, val]) => `${key}: ${val}`)
  .join('\n')}

Instruction:
${selectedTemplate?.aiPrompt}
`;


    setLoading(true);

    const res= await fetch('/api/gemini', {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({prompt:FinalAIPrompt}),
    });

    const data = await res.json();
    // console.log("API Result:", data.text);

    setGeneratedText(data.text || 'no result');
    setLoading(false);

  }



  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      {/* formsection */}
      {selectedTemplate && <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=> GenerateAIContent(v)}/>}



      {/* outputsection */}
      <div className='col-span-1 md:col-span-2 bg-white rounded-3xl shadow-lg p-6 border border-gray-200'>
      <OutputSection generatedText={generatedText} loading={loading}/>
      </div>

    </div>
  )
}

export default CreateNewContent
