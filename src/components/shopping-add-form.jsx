import React from 'react'

class ShoppingAddForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			number: ''
		}
	}


	onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
		

		console.log(this.state);
	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number
		}
	}

	render(){
		return (
			<div className='form'>
				<input type="text" className='title' name='title' placeholder='Title ...' onChange={this.onChange} value={this.state.title}/>
				<input type="number" className='number' name='number'  placeholder='13' onChange={this.onChange} value={this.state.number}/>
				<button>Add</button>
			</div>
		)
	}
}



export default ShoppingAddForm
