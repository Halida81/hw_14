import { useState } from 'react'
import Card from '../components/UI/Card'

function AddTodo(props) {
	const [name, setName] = useState('')

	const inputChangeHandler = (e) => {
		setName(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
        props.onAddTodo(name)
        setName('')
	}
	return (
		<Card>
			<form onSubmit={submitHandler}>
				<input value={name} onChange={inputChangeHandler} />
				<button>add todo</button>
			</form>
		</Card>
	)
}
export default AddTodo
