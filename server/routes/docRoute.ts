import express from 'express'

import { getUserDocs, getDocById, cr8Doc, upd8Doc, del8Doc } from '../controllers/docController'

const router = express.Router();


// Get All User's Docs
router.get('/', getUserDocs);

// Get Doc By Id
router.get('/:id', getDocById);

// Post a new Doc
router.post('/create', cr8Doc);

// Update a Doc
router.patch('/:id', upd8Doc);

// Delete a Doc
router.delete('/:id', del8Doc);

export { router as docRoute }