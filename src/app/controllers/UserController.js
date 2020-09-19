import passwordGenerator from  'password-generator';

export default {
    async store(request, response) {
        const { nome, email } = request.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        return response.json(user);
    }
}