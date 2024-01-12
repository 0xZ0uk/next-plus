"use client";

import React from "react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
	return (
		<header className="w-10/12 h-16 flex items-center justify-between text-foreground">
			<div>
				<span className="font-bold">Next+</span>
			</div>
			<div>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="/#docs" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Docs
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/#guide" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Getting Started
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link
								href="https://github.com/0xZ0uk/create-next-plus"
								target="_blank"
								legacyBehavior
								passHref
							>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									GitHub
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div>
				<ModeToggle />
			</div>
		</header>
	);
};

export default Header;
