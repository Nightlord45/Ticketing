import express from "express";

const router = express.Router();

router.post('/api/users/signout', (req: express.Request, res: express.Response) => {
    res.send("Current user Info");
});

export { router as signoutRouter };