import { getRepository } from 'typeorm';
import md5 from 'crypto-js/md5';
import { User } from '../../entity/User';

import { UserSignIn } from './dtos/user.signin.dtos'
import { UserSignUp } from './dtos/user.signup.dtos'
import AppError from '../../shared/error/AppError';

export default class UserService {
    
    async signin(user: UserSignIn) {
        const userRepository = getRepository(User);

        const {email, password} = user;
        const passwordHash = md5(password).toString();

        const existUser = await userRepository.findOne({where: {email, password: passwordHash}})

        if(!existUser) {
            throw new AppError('User not exist', 401)
        }

        const { secret}
    }

    async signup(user: UserSignUp) {

    }
}