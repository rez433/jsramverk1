import type { Metadata } from "next";
// import { getServerSession } from "next-auth";
// import { cn } from "@/lib/utils";
import "./styles/globals.css";

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
	title: "Text Editor",
	description: "Collaborative Text Editor",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const session = await getServerSession();

	return (
		<html lang="en">
			<body>
				{/* <SessionProvider session={session}> */}
					<main>
						<Header />
						{children}
						<Footer />
					</main>
				{/* </SessionProvider> */}
			</body>
		</html>
	);
}
