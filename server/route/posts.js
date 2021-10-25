import express from 'express';
import {postRoute, createRoute, deletePost, updatePost} from '../controller/postsControl.js'

const router = express.Router()

router.get('/', postRoute);
router.post('/', createRoute);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router