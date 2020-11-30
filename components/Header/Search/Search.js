import SearchButton from './SearchButton'

const Search = () => {
    return (
        <div className="absolute py-4 px-8 bg-red-100 top-6 rounded-lg left-1/2 space-x-8 flex flex-row justify-start">
            <input className="rounded-lg shadow-inner px-2" placeholder="Search post..."></input>
            <SearchButton type="button" href="/" text="Search" />
        </div>
    )
}

export default Search
