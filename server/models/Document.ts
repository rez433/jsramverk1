import mongoose from 'mongoose';

interface Doc {
	_id: mongoose.Schema.Types.ObjectId;
	title: string;
	content: string;
	author: mongoose.Schema.Types.ObjectId;
	co_author?: mongoose.Schema.Types.ObjectId;
	created: Date;
	updated: Date;
}

const docSchema = new mongoose.Schema<Doc>({
	_id: mongoose.Schema.Types.ObjectId,
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	co_author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date, required: true,
		default: Date.now
	},
	updated: {
		type: Date, required: true,
		default: Date.now
	},
});

export default mongoose.model<Doc>('Doc', docSchema);