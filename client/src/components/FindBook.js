const Seek = () => {
	return(
		<form className='add-form'>
		<div className='form-control'>
		<label htmlFor="">Search</label>
		<input type="text" placeholder='Title, Author or keyword' />
		<input type='submit' value='Find Book' />
		</div>
		</form>
	)
}

export default Seek