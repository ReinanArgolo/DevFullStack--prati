import classes from './HelloWorld.module.css';

const book = ['Harry Potter', 'Lord of the Rings', 'Game of Thrones'];


function HelloWorld() {

    const chosenBook = Math.random() > 0.5 ? 'Harry Potter' : 'Lord of the Rings';

    return (
        <div>
            <h1 className={classes.helloWorld}>Hello World, sou o Reinan</h1>
            <p>Ou o N4N</p>
            <p>{chosenBook}</p>
        </div>
    )
}

export default HelloWorld