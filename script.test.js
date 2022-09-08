import { checkCredentials } from "./script.js";
import {hashPassword} from "./script.js";

let tempUsername = 'gangstaKilla420';
let tempPassword = 'word53ukl';
let tempUserTwo = 'Justin100';
let tempPassTwo = 'qwerty123';

test("check that fn is converting to sha-256", async () => {
    const data = await hashPassword(tempPassTwo)
    expect(data).toEqual('0da0aa0d60e506004e08e0170bd09f01008d0910e206a0fe0620810da0c80fd0a00090100400a70a60d70bd09b0430b5')
    //expect(hashPassword(tempPassword)).toEqual('0bc07003206905608003908106206d0f70b808f0bc00a0aa0eb0580330f10a60880b209d05c0d803e02409906800d0e7')
})

