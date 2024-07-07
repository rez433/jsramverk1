"use client";

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

const Header = () => {
	const pathName = usePathname();

	console.log(pathName);

	return (
		<header>
			<nav>
				<div className="logoDiv">
					<Link href="/">
						<Image
							src="logo.svg"
							alt="Logo"
							width={56}
							height={60}
						/>
					</Link>
				</div>
				<div className="lnksDiv">
					<Link href="/editor">Editor</Link>
					<Link href="/about">About</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
