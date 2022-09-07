import {Component} from 'react';
import image from './delete.png';

export class ToDoList extends Component{
    state = {
        userInput: "",
        toDo: [],
        done: []
       
    }
    onChangeEvent(e){
        this.setState( {userInput: e });
    }

    addItem(input){
        if (input === ""){
            alert('Please type your goal!');
        }
        else{
            let listArray = this.state.toDo;
            listArray.push(input);
            this.setState({toDo: listArray, userInput: ""})
        }
    }

    deleteDone( input, index){
        let listArray = this.state.toDo;
        let deleteDo = this.state.done;
        listArray.splice(index, 1);
        deleteDo.push(input);
        this.setState({todo: listArray});
        this.setState({done: deleteDo});  
    }

    deleteItem(){
        let listArray = this.state.toDo;
        listArray = [];
        this.setState({ toDo: listArray });
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className='container'>
                <form onSubmit={ this.onFormSubmit}>
                <div className='center'>
                    <h1 className='h1'>To Do List</h1>
                </div>
                <div className='center'>
                    <input type="text" placeholder='Plan your day...'
                     onChange = { (e) => {this.onChangeEvent(e.target.value)}} 
                     value = {this.state.userInput} />
                    
                    <button className='btn-add'
                    onClick={ () => this.addItem(this.state.userInput)}>
                        Add</button>
                </div>
                <ul>
                    {this.state.toDo.map((item, index) =>(
                        <li key={index}>
                            {item}
                            <img className='delete' src={image} alt="delete" width="20px" hight="20px"
                            onClick={ () => this.deleteDone(item, index)} />
                        </li>
                    ))}
                </ul>

                <div className='center'>
                    <button className='btn-delete'
                    onClick= { () => this.deleteItem()}>
                        Delete All</button>
                </div>
                </form>
            </div>
        )
    }
}
 