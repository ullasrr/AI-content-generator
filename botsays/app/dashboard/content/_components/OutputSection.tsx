'use client'
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

// this thing was not working on server side rendering, so we are using dynamic import with ssr:false 
// to load the Editor component only on the client side in the user browser
const Editor = dynamic(() => import('@toast-ui/react-editor').then(mod => mod.Editor), { ssr: false });


interface Props{
  generatedText:string;
  loading: boolean;
}

function OutputSection({generatedText,loading}:Props) {
  const editorRef:any = useRef(null);

  React.useEffect(()=> {
      // console.log("EditorRef:", editorRef.current);
      console.log("Generated Text:", generatedText);
    if(editorRef.current && generatedText){
      const instance=editorRef.current.getInstance?.();
      if(instance){
        instance.setMarkdown(generatedText);
      } else {
        console.error("Editor instance is not available");
      }
    }
  },[generatedText])

//   React.useEffect(() => {
//   const timeout = setTimeout(() => {
//     if (editorRef.current && generatedText) {
//       const instance = editorRef.current.getInstance?.();
//       if (instance) {
//         instance.setMarkdown(generatedText);
//       }
//     }
//   }, 100); // delay just a bit

//   return () => clearTimeout(timeout);
// }, [generatedText]);


  return (
    <div className="rounded-3xl border border-gray-200 shadow-lg bg-white p-6 w-full h-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">📝 Your Result</h2>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 cursor-pointer"
        >
          <Copy size={16} />
          Copy
        </Button>
      </div>

      {/* Toast UI Editor */}
      <div className="flex-1 overflow-hidden rounded-lg border border-gray-300">
        <Editor
          ref={editorRef}
          initialValue="Result will be shown here"
          height="600px"
          previewStyle="vertical"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={()=> console.log(editorRef.current.getInstance().getMarkdown())}
        />
      </div>
    </div>
  );
}

export default OutputSection;
