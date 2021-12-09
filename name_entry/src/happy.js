
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                return todo
            })
            console.log(prevState.todos)
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }