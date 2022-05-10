function ErrorModal(props) {
	return (
		<div>
			<div onConfirm={props.onConfirm} className='backdrop' />
		</div>
	)
}
