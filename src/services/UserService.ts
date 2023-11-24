const db = [
    {
        name: "Bernardo",
        email: "bernardo@dio.com",
        id: 1
    },
    {
        name: "Maria",
        email: "maclau@dio.com",
        id: 2
    },

]


export class UserService {
    createUser = (name: string, email: string, id: number) => {
        const user = {
            name,
            email,
            id
        }
        db.push(user);
        console.log('DB updated', db);
    }

    getAllUsers = () => {
        return db;
    }

    deleteUser = (id: number) => {
        const userIndex = db.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        db.splice(userIndex, 1);

    }
}