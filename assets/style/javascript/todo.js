const addTodoBtn = document.querySelector(".add");
const todoText = document.querySelector( "input" );
const todoList = document.querySelector( ".todo-updates" );
const todoCount = document.querySelector(".count");
const clearAll = document.querySelector(".clear");


window.addEventListener( 'load', (e) =>
{
    const todo = new Todo()
    addTodoBtn.addEventListener( 'click', () =>
    {
        const title = todoText.value;
        if ( title )
        {
            const { div,removeBtn  } = todo.add(title);
            todoList.appendChild( div );

            todoCount.textContent = todo.todoCount;
            todoText.value = null;

            todo.onDelete( removeBtn, () =>
            {
                todoCount.textContent = todo.todoCount;
            } )

        }

        if ( !title )
        {
            alert('please add a todo')
        }
    } );

    clearAll.addEventListener( 'click', () =>
    {
        todoList.innerHTML = null;
        todo.todoCount = 0;
        todoCount.textContent = 0;
    } )
    
    
} );



class Todo
{
    todoCount = 0;

    add( title )
    {
        const div = document.createElement( 'div' );
        div.className = "items bg-sky-100 p-2 mt-[20px] flex justify-between align-middle";
        const p = document.createElement( 'p' );
        p.className = "itemValue";
        const removeBtn = document.createElement("button");
        removeBtn.className ="fa-solid fa-trash bg-red-600 p-3 text-white absolute right-0 translate-y-[-7px]";
        p.textContent=`${title}`
        
        div.appendChild( p );
        div.appendChild(removeBtn);

        this.todoCount += 1;
        todoList.appendChild( div );
        return { div, removeBtn };
    }


    onDelete( removeBtn, cb )
    {
        removeBtn.addEventListener( 'click', () =>
        {
            
            removeBtn.parentElement.remove();
            this.todoCount -= 1;
            cb();
        } )
        
        
    }
}