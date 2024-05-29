function Greetings(obj){
    let {age, occupation}=obj;
    let name ="raju";
    return (
        <h1>Hello {name}! Thanks for using to react your first program
        <br/> and your {age} old and works as{occupation}
        </h1>
    );
}

export default Greetings