import { useEffect, useReducer, useState } from 'react'
import AddTodo from './components/AddTodo'
import ToDos from './components/ToDos'

// import Box from './components/Users/Box'
// import './App.css'
// import AddUser from './components/Users/AddUser'
// import UserList from './components/Users/UserList'

const init = () =>
	JSON.parse(localStorage.getItem('item')) || {
		items: [],
		completed: {},
	}

const todoReducer = (prevState, action) => {
	if (action.type === 'ADD_TODO') {
		return {
			...prevState,
			items: [
				...prevState.items,
				{
					name: action.value,
					id: Math.random().toString(),
				},
			],
		}
	}
	if (action.type === 'COMPLETED') {
		return {
			...prevState,
			completed: {
				...prevState.completed,
				[action.index]: !prevState.completed[action.index],
			},
		}
	}
	return {
		items: [],
		completed: {},
	}
}

function App() {
	// const [users, setUsers] = useState([])

	// function addUserHandler(name, age) {
	// 	setUsers([...users, ({ name, age, id: Math.random().toString() })])
	// }
	// return (
	// 	<div className='App'>
	// 		<AddUser onAdd={addUserHandler} />
	//   <UserList users={users}/>
	//   <Box/>
	// 	</div>
	// )
	// const [todos, setTodos] = useState([{name:'ALi',id:'1'}, {name:'Bek',id:'2'}])

	const [todoState, dispatchTodo] = useReducer(
		todoReducer,
		{
			items: [],
			completed: {},
		},
		init,
	)

	const chekedFunc = (index) => {
		dispatchTodo({ type: 'COMPLETED', index: [index] })
	}
	const addTodo = (text) => {
		dispatchTodo({ type: 'ADD_TODO', value: text })
	}

	useEffect(() => {
		localStorage.setItem('item', JSON.stringify(todoState))
	}, [todoState])
	return (
		<div className='App'>
			<AddTodo onAddTodo={addTodo} />
			<ToDos todos={todoState} chekedFunc={chekedFunc} />
		</div>
	)
}

export default App
