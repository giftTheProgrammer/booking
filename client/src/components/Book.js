const Book = ({ book }) => {
	return(
		<div className='book'>
		<h2><small className='light'>Title:</small> {book.title}</h2>
		<div className='horizontal'>
		<h3><small className='light'>Author:</small> {book.author}</h3>
		<h4><small className='light'>published:</small> {book.pdate}</h4>
		</div>
		</div>
	)
}

export default Book