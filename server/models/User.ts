import mongoose from 'mongoose';

interface User {
	_id: mongoose.Schema.Types.ObjectId;
	email: string;
	name: string;
	last_name: string;
	registered: Date;
	documents?: mongoose.Schema.Types.ObjectId[];
	creator: boolean;
}

const userSchema = new mongoose.Schema<User>({
	_id: mongoose.Schema.Types.ObjectId,
	email: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	registered: {
		type: Date,
		required: true,
		default: Date.now
	},
	documents: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Doc'
	},
	creator: {
		type: Boolean,
		default: false
	}
});

export default mongoose.model<User>('User', userSchema);
