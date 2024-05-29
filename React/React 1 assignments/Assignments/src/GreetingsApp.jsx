 import './App.css';
import Greetings from "./Greetings";

function GreetingsApp(){
    return (
        <div className="greetings">
            <Greetings age={27} occupation="test engineer"/>
        </div>
    );
}
export default GreetingsApp