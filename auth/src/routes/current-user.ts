import express from "express";

const router = express.Router();

router.get('/api/users/currentuser', (req: express.Request, res: express.Response) => {
    res.send("Current user Info");
});

export { router as currentUserRouter };