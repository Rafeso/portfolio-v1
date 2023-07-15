import { useState } from "react";
import {
  faClipboardCheck,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <FontAwesomeIcon icon={faClipboardCheck} />
          </span>
        ) : (
          <span className="flex h-7 items-center gap-2 rounded-lg bg-red-600 p-5 text-center text-sm text-white opacity-90">
            {copyText}
            <FontAwesomeIcon icon={faClipboardList} />
          </span>
        )}
      </button>
    </div>
  );
}
