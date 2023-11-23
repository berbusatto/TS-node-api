import { Response, Request, response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    createUser = (request: Request, response: Response) => {
            const userService = new UserService();
            const user = request.body;

            if(!user.name){
                return response.status(400).json({message: 'Bad request: invalid name'}); 
            }
            userService.createUser(user.name, user.email);
            
            return response.status(201).json({ message: 'User created' });        
        }


    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService();
        const users = userService.getAllUsers();
        return response.status(200).json(users);
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body;
        console.log(user);
        // sem implementação na service por enquanto...
        return response.status(200).json({message: 'User deleted'})
    }

    }
