import { Router } from 'express';

const router = Router();

router.get('/', async () => (req, res) => {
    return res.status(200).json({
        message: 'There is no much to see there, try /issues!'
    })
})

router.get('/issues', async (req, res) => {
    return res.status(200).json({
        message: 'Hi there, welcome to this amazing POC!'
    })
})

export default router;