import BCard from './BCard'
import { books } from '../../../../Db/Books.json'

export default function Books() {
  console.log(books)
  return (
    <div className="sm:pl-[5%] sm:pr-[5%]">
      <h1 className="text-center font-bold p-2 text-[40px]">Books</h1>
      <div className="flex gap-[0.46rem] sm:gap-[0.6rem] p-2 flex-wrap">
        {books.map((p) => (
          <BCard books={p} key={p.isbn} />
        ))}
      </div>
    </div>
  )
}
