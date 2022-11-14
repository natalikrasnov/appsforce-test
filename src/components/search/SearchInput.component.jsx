export function SearchInput({ onChange }) {
    return (
        <div className="search">
            <input onChange={onChange} placeholder="search for user"/>
        </div>
    )
}