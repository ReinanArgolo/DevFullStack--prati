import { useContext } from "react";
import {MyContext} from "./contexto";


const MyChildren = () => {
    const context = useContext(MyContext);

    return <div> Meu nome é: {context.name}</div>
}

export default MyChildren