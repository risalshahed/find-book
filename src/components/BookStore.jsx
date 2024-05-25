import { useState } from "react";
import BookActions from "./BookActions";
import EachBook from "./EachBook";
import { data } from "../utilities/data";

export default function BookStore() {
  const [books, setBooks] = useState(data);
  // console.log(books);
  const [sortCriteria, setSortCriteria] = useState('');

  const handleFavorite = _id => {
    const newBooks = [...books];
    books.map(book => {
      if(book.id === _id) {
        book.isFavorite = !book.isFavorite
      }
    })
    setBooks(newBooks);
  }

  const handleSearch = searchTerm => {
    setBooks(prevBooks => prevBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }

  const handleSort = criteria => {
    setSortCriteria(criteria);
    const sortedBooks = [...books];
    switch (criteria) {
      case 'name_asc':
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'year_asc':
        sortedBooks.sort((a, b) => a.published_in - b.published_in);
        break;
      case 'year_desc':
        sortedBooks.sort((a, b) => b.published_in - a.published_in);
        break;
      default:
        break;
    }
    setBooks(sortedBooks);
  };

  let content;
  if(books?.length === 0) content = <p>No Book Found.</p>
  if(books?.length > 0) content = (
    books.map(book =>
      <EachBook key={book.id} book={book} onFav={handleFavorite} />
    )
  )

  return (
    <main className="my-10 lg:my-14">
      {/* Book Actions */}
      <BookActions onSearch={handleSearch} onSort={handleSort} />
      {/* Book List */}
      <section
        className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {/* Each Book Item */}
        {content}
      </section>
    </main>
  )
}