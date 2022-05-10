const ToDo = (props) => {
	console.log(props)
	const name = props.name
	const completed = props.chekedFunc
	const index = props.indexOfElem

	return (
		<li style={props.style} onClick={() => completed(index)}>
			{name}
		</li>
	)
}

export default ToDo
