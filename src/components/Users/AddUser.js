import { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

function AddUser(props) {
	const [userName, setUserName] = useState('')
	const [age, setAge] = useState('')
    const[error, setError] = useState(null)

	function addUserHandler(e) {
		setUserName(e.target.value)
        console.log(e.target.value)
	}

	function addAgeHandler(e) {
		setAge(e.target.value)
	}

    function submitHandler(e){
e.preventDefault()
if(userName.trim().length === 0 || age.trim().length === 0){
    setError({
        title:'поля имя не заполнены',
        message: 'напишите свое имя и возраст'
    })
    return
}
if(+age <18){
    setError({
        title:'поля возраст не заполнена(<18)',
        message:' указиже свой возраст пожалуйста',
    })
    return
}
props.onAdd(userName, age)
setAge('')
setUserName('')
    }

	return (
		<Card className={classes.input}>
			<form onSubmit={submitHandler}>
				<label htmlFor='username'>UserName</label>
				<input
					type='text'
					id='username'
					onChange={addUserHandler}
					value={userName}
				/>
				<label htmlFor='age'>Age</label>
				<input
					type='number'
					id='age'
					onChange={addAgeHandler}
					value={age}
				></input>
            <Button type='submit'>Add User</Button>

			</form>
		</Card>
	)
}

export default AddUser
