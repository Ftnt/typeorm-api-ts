import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { hashPassword } from '../utils/passwordUtil';


const userRepository = AppDataSource.getRepository(User);

export const create = async ({username, password, email}) => {
    const hashedPassword = await hashPassword(password);

    const user = new User();
    user.username = username;
    user.password = hashedPassword;
    user.email = email;

    await userRepository.save(user);

    return user;
}

export const getUserByUsername = async (username: string): Promise<User> => {
    const user = await userRepository.findOneBy({username});
    return user;
}