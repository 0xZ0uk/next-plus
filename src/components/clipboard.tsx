"use client";

import React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy } from "lucide-react";

const Clipboard = () => {
	const handleCopyToClipboard = async (text: string) => {
		await navigator.clipboard.writeText(text);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none ring-none">
				<Copy className="h-4 w-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => handleCopyToClipboard("bun create next-plus@latest")}
				>
					bun
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleCopyToClipboard("npx create-next-plus@latest")}
				>
					npm
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() =>
						handleCopyToClipboard("pnpm dlx create-next-plus@latest")
					}
				>
					pnpm
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Clipboard;
