import passwordGenerator from  'password-generator';
import Queue from '../lib/Queue';


export default {
    async store(request, response) {
        const { nome, email } = request.body;

        const user = {
            nome,
            email,
            password: passwordGenerator(15, false)
        };

        await Queue.add('RegistrationMail', { user });

        return response.json(user);
    }
}