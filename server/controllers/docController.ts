import User from '../models/User'

// type of res and req are often any
export const getUserDocs = async(req: any, res: any) => {
	try {
		const userId = req.params.userId
		const user = await User.findById(userId).populate('documents')

		// if userId is not correct
		if (!user)
		{
			return res.status(404).json({
				message: 'User not found'
			})
		}

		if (user.documents?.length === 0) {
			return res.status(200).json({
				message: 'You have no documents saved in the database yet, Start with create a new document'
			})
		}

		res.json(user.documents)
	}
	catch (error)
	{
		console.log('Error while fetching documents from database', error)
		res.status(500).json({
			message: 'Internal server error'
		})
	}
}
export const getDocById = async() => {

}
export const cr8Doc = async() => {

}
export const upd8Doc = async() => {

}
export const del8Doc = async() => {

}
