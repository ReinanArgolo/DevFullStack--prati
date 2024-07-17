import { useState } from "react";

function AddressFrom() {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: '',
    })

    const handleChange = (event) => {
            const { name, value } = event.target
            setAddress(prevState => ({
                ...prevState,
                [name]: value
            }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (address.street === '' || address.city === '' || address.postalCode === '') {
            alert('Preencha todos os campos')
        } else {
            alert(`ENDEREÇO:\n Rua: ${address.street}\n Cidade: ${address.city}\n CEP: ${address.postalCode}`)

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>
                    rua:
                    <input type="text" name="street" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Cidade:
                    <input type="text" name="city" onChange={handleChange} />
                </label>
                <br />
                <label>
                    CEP:
                    <input type="text" name="postalCode" onChange={handleChange} />
                </label>
                <br />
                
                <button type="submit">Enviar</button>

            </form>
        </>
    )
}

export default AddressFrom