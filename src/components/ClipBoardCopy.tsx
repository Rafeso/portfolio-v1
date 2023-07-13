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
		<div className="flex items-center justify-center m-5">
			<button type="button" onClick={handleCopyClick}>
				{isCopied ? (
					<span className="text-white text-sm flex gap-2 bg-green-600 h-7 text-center items-center  p-5 rounded-lg">
						{copyText}
						<FontAwesomeIcon icon={faClipboardCheck} />
					</span>
				) : (
					<span className="text-white text-sm flex gap-2 bg-red-600 opacity-90 h-7 text-center items-center p-5 rounded-lg">
						{copyText}
						<FontAwesomeIcon icon={faClipboardList} />
					</span>
				)}
			</button>
		</div>
	);
}
