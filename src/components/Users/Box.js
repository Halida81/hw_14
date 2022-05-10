import { useEffect, useRef, useState } from 'react'

function Box() {


	const ref = useRef()
	const [state, setState] = useState(null)
	const color = {
		width: '100px',
		height: '100px',
	}

	useEffect(() => {
		setTimeout(() => {
			setState(!state)
		}, 1000)
		state
			? (ref.current.style.background = 'purple')
			: (ref.current.style.background = 'green')
	})
	return <div style={color} ref={ref}></div>
}

export default Box
