import { data } from '@/app/utilities/data'
import BooksList from './components/BooksList';

const Home = () => {

  const { books } = data;

  return (
    <div>
      <div className=' flex justify-between items-center py-4 px-10'>
        <h1 className='"md:text-2xl text-xl font-bold'>Daftar Buku</h1>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 px-10'>
        {books.map(book => {
          return (
            <div key={book.id} className='shadow-xl'>
              <BooksList title={book.title} images={book.image} harga={book.harga} id={book.id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home