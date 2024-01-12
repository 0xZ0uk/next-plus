import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import React from "react";

const Footer = () => {
	return (
		<div className={cn("text-center py-8", GeistMono.className)}>
			Made with ❤️ by Pedro Santana (0xZ0uk)
		</div>
	);
};

export default Footer;
