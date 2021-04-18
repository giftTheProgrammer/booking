import Book from './Book'

const Books = ({ books }) => {
	return(
		<div className='show-area'>
		{books.map( (book, index) => (<Book key={index} book={book} />) )}
		</div>
	)
}

export default Books