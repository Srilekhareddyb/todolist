const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    let today = new Date().toISOString().split("T")[0];
  
    const overdue = () => {
      return all.filter((todo) => {
        return todo.dueDate < today;
      });
    };
  
    const dueToday = () => {
      return all.filter((todo) => {
        return todo.dueDate === today;
      });
    };
  
    const dueLater = () => {
      return all.filter((todo) => {
        return todo.dueDate > today;
      });
    };
  
    const toDisplayableList = (list) => {
      return list
        .map((todo) => {
          srilekha = todo.completed ? "[x]" : "[ ]";
          srikar = todo.dueDate == today ? "" : todo.dueDate;
  
          return `${srilekha} ${todo.title} ${srikar}`;
        })
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  module.exports = todoList;
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  