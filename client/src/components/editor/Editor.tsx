"use client";

import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './editor.css'

export default function Editor() {
	const { quill, quillRef } = useQuill();
	const [ txt, setTxt ] = useState('')

	const handleSave = () =>
	{
		console.log(txt)
	}

	const handlePrint = () =>
	{
		console.log(txt)
	}
	

	useEffect(() => {
		if (quill) {
			quill.on('text-change', (delta, oldDelta, source) => {
				// console.log(quill.getContents().ops[0].insert);
				// console.log(quill.getText());
				// console.log(quill.root.innerHTML);
				const txtContents = quill.root.innerHTML;
        		setTxt(txtContents);
			});
		}
	}, [quill, quillRef]);

	return (
		<div>
			<div className='menuBarDiv'>
				<span className='funcSpan' onClick={handleSave}>Save</span>
				<span className='funcSpan' onClick={handlePrint}>Print</span>
			</div>
			<div ref={quillRef} />
		</div>
	);
}
