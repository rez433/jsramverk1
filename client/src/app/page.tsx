// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
// 	return (
// 		<main className={styles.main}>

// 		</main>
// 	);
// }


import React from 'react';

// Define the type for your items
type Doc = {
	id: number;
	title: string;
	// other fields...
};

// Define an async function to fetch data from the API
const fetchDocs = async (): Promise<Doc[]> => {
	const res = await fetch('http://localhost:3131/api/docs', {
		cache: 'no-store', // Use 'no-store' to disable caching
	});
	if (!res.ok) {
		throw new Error('Failed to fetch docs');
	}
	return res.json();
};

// Define the page component
const Home = async () => {
	const docs = await fetchDocs();

	return (
		<div>
			<h1>List of Items</h1>
			<ul>
				{docs.map((doc) => (
					<li key={doc.id}>{doc.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
