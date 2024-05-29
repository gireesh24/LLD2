export default function Item(name, isPacked ) {
    return(
        <>
        <li className="listiteam">
            {name}
            {isPacked ?'✔' : '❌'}
        </li>
        </>
    )
}