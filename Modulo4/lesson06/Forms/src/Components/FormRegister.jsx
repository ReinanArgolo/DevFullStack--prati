import React, { useState } from "react";
import css from "./FormRegister.module.css";

function FormRegister() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordValidation: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        if (user.name === '') {
            validationErrors.name = 'Preencha o campo de nome';
        }
        if (user.email === '') {
            validationErrors.email = 'Preencha o campo de email';
        } else if (!isValidEmail(user.email)) {
            validationErrors.email = 'Email inválido';
        }
        if (user.password === '') {
            validationErrors.password = 'Preencha o campo de senha';
        } else if (user.password.length < 8) {
            validationErrors.password = 'Sua senha deve ter pelo menos 8 dígitos';
        }
        if (user.password !== user.passwordValidation) {
            validationErrors.passwordValidation = 'As senhas digitadas devem ser iguais';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert(`Usuário ${user.name} criado com sucesso!`);
        }
    };

    return (
        <>

            
            <div className={css.container}>
                <div className={css.form}>
                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Digite Seu nome completo: <br />
                        <input type="text" name="name" value={user.name} onChange={handleChange} />
                        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    </label>
                    
                    <label>
                        Digite Seu Email: <br />
                        <input type="text" name="email" value={user.email} onChange={handleChange} />
                        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    </label>
                    
                    <label>
                        Escolha uma senha: <br />
                        <input type="password" name="password" value={user.password} onChange={handleChange} />
                        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                    </label>
                    
                    <label>
                        Repita a mesma senha: <br />
                        <input type="password" name="passwordValidation" value={user.passwordValidation} onChange={handleChange} />
                        {errors.passwordValidation && <p style={{color: 'red'}}>{errors.passwordValidation}</p>}
                    </label>
                    <br />
                    <button type="submit">Cadastrar</button>
                </form>
                </div>
            </div>
        </>
    );
}

export default FormRegister;
