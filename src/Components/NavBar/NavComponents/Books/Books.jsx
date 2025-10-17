import BCard from './BCard'
import { books } from '../../../../Db/Books.json'

export default function Books() {
  return (
    <div className="sm:pl-[4%] sm:pr-[4%] ">
      <div className="flex gap-[0.46rem] sm:gap-[0.6rem] p-2 flex-wrap">
        {books.map((p) => (
          <BCard books={p} key={p.isbn} />
        ))}
      </div>
    </div>
  )
}
