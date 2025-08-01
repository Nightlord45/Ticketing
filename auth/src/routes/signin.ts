import express from "express";

const router = express.Router();

router.post('/api/users/signin', (req: express.Request, res: express.Response) => {
    res.send("Current user Info");
});

export { router as signinRouter };