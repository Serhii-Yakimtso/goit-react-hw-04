import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.length === 0) {
      toast.error('Please, type a tag');
      return;
    }
    onSearch(value);
  };
  return (
    <header>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
