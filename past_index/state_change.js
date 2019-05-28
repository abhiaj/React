import React from "react"

class App extends React.Component {

    //every class taht uses state requires constructor
    //every cinstructor requires super that brings some goodies from Component class to new class
    //state is an object

    constructor() {
        super()
        this.state = {
            count: 0
        }

        //for any meethod that is using setstate method binding is requirred 
        this.handleClick = this.handleClick.bind(this)
    }
    
    //method using set state emthod
    handleClick() {

        //prevstate is a variable object depicting the cureent/previosu state
        //arrow notation used
        //setstate is a method brought from Component class using super
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        //functions outside the render will be called by using the this keyword
        return (
            <div>

                <h1>{this.state.count}</h1>

                <button onClick={this.handleClick}>Change!</button> 
            </div>
        )
    }
}

export default App



    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
