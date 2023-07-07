import { useState } from "react"
import {FaClipboardCheck, FaClipboardList} from 'react-icons/fa6'

interface clipBoardProps {
  copyText: string
}

export default function ClipboardCopy({ copyText }: clipBoardProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
  }

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleCopyClick}>    
       {isCopied ? <span className="text-white text-sm flex gap-2 bg-green-600 h-7 text-center items-center mt-5 p-5 rounded-lg">{copyText}<FaClipboardCheck/></span> :  <span className="text-white text-sm flex gap-2 bg-red-600 opacity-90 h-7 text-center items-center mt-5 p-5 rounded-lg">{copyText}<FaClipboardList/></span> }
      </button>
    </div>
  );
}