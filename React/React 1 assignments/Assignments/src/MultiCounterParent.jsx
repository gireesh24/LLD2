import MultiCounterFun from "./MultiCounter";

function ParentCounter(){
    return (
        <div>
            <MultiCounterFun index={1} value={2}/>
            <MultiCounterFun index={2} value={3}/>
            <MultiCounterFun index={4} value={5}/>
        </div>
    )
}

export default ParentCounter