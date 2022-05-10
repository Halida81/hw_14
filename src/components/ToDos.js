import Card from '../components/UI/Card'
import ToDo from '../components/ToDo'
const ToDos = (props) => {
	return (
		<Card>
			<ul>
				{props.todos.items.map((todo,index) => (
					<ToDo
						style={{
							textDecoration: props.todos.completed[index]
								? 'line-through'
								: '',
						}}
						indexOfElem={index}
						key={todo.id}
						name={todo.name}
						chekedFunc={props.chekedFunc}
					/>
				))}
			</ul>
		</Card>
	)
}

export default ToDos
