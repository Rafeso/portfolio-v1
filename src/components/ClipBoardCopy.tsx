import { Check, ClipboardText } from "@phosphor-icons/react"
import { useState } from "react";

interface clipBoardProps {
  copyText: string;
}

export function ClipBoardCopy({ copyText }: clipBoardProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    return await navigator.clipboard.writeText(text);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };

  return (
    <div className="m-5 flex items-center justify-center">
      <button type="button" onClick={handleCopyClick}>
        {isCopied ? (
          <span className="flex h-7 items-center gap-2 rounded-lg bg-green-600 p-5 text-center  text-sm text-white">
            {copyText}
            <Check size={20} />
          </span>
        ) : (
          <span className="flex h-7 items-center gap-2 rounded-lg bg-red-600 p-5 text-center text-sm text-white opacity-90">
            {copyText}
            <ClipboardText size={20} />
          </span>
        )}
      </button>
    </div>
  );
}
