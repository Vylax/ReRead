import * as jwt from "jsonwebtoken"

//* Json Web Token Class
/**
 ** Contains all the methods related to jsonwebtoken package. It is called by the services. 
 */
export default class AuthHelper {
    
    // Method: Creates a Json web token that contains the user id
    public async jwtSign(_id: Object): Promise<any> {

        const id = JSON.stringify(_id)

        const jwtToken = jwt.sign({
            data: id
        }, process.env.JWT_SECRET, { expiresIn: '1h' })

        return jwtToken
    }

    //  TODO: Create Compare tokens method
    //? Create refresh token method?
}