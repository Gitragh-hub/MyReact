const SearchItem = ({search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor='search'>Search</label>
    <input
    autoFocus
    id='search'
    type='text'
    placeholder='Search Item'
    required
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    ></input>
    
</form>
  )
}

export default SearchItem