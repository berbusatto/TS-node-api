import { Response, Request, response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    createUser = (request: Request, response: Response) => {
        try {
            const userService = new UserService();
            const user = request.body;
    
            if (!user || !user.name || !user.email || !user.id) {
                throw new Error('Bad request: invalid user data');
            }  

            userService.createUser(user.name, user.email, user.id);
    
            return response.status(201).json({ message: 'User created' });
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }


    getAllUsers = (request: Request, response: Response) => {
        try {
            const userService = new UserService();
            const users = userService.getAllUsers();

            return response.status(200).json(users);
        } catch (error: any) {
            return response.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }

    deleteUser = (request: Request, response: Response) => {
        try {
            const userIdParam = request.query.id;
            if (!userIdParam) {
                throw new Error('Missing userId in query parameters');
            }
    
            const userId = parseInt(userIdParam as string, 10);
            if (isNaN(userId)) {
                throw new Error('Invalid userId format');
            }
    
            const userService = new UserService();
            userService.deleteUser(userId);
    
            return response.status(200).json({ message: 'User deleted' });
        } catch (error: any) {
            return response.status(404).json({ message: error.message });
        }
    }
}
