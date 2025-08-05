import request from "supertest";
import { app } from "../app";

const getCookie = async () => {
    const  email = 'test@test.com';
    const password = 'password';

    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email, password
        })
        .expect(201);

    let cookie: any;
    cookie = response.get('Set-Cookie');
    if (!cookie) {
        throw new Error("Failed to get cookie from response");
    }
    return cookie;
}

export default getCookie;