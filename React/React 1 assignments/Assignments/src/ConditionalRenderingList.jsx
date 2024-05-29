import Item from "./ConditionalRenderingItems";

export default function PackageList(){
    return (
        <section>
        <h1>Sally  Packing List</h1>
        <ul>
            <Item
             name="jhon"
            isPacked={true}
            />
            <Item
             name="deo"
            isPacked={false}
           
            />
            <Item
            name="raju"
            isPacked={false}
            />
            <Item
            name="vysyaraju"
            isPacked={false}
            />
        </ul>
        </section>
    )
}