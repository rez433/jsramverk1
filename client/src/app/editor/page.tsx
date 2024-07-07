"use client"

// import { getServerSession } from "next-auth"
// import { redirect } from "next/navigation"
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor/Editor"), { ssr: false });

export default async function TXTEditor() {
	// const session = await getServerSession()

	// if (!session || !session.user ) {
	// 	redirect("/api/auth/signin")
	// }
	return (
		<Editor />
	);
}
