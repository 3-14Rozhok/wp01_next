import SearchButton from './SearchButton'

const Search = () => {
    return (
        <div className="relative h-20 ml-10 mr-4 py-4 pl-4 pr-2 bg-red-100 top-6 rounded-lg flex flex-row flex-grow justify-end max-w-3xl">
            <input className="rounded-lg pl-2 flex-grow border-blue-300 w-full" placeholder="Search post..."></input>
            <SearchButton type="button" href="/" text="Search" />
        </div>
    )
}

export default Search
