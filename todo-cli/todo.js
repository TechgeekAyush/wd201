const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => item.dueDate < today);
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => item.dueDate === today);
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const today = new Date().toISOString().split("T")[0];
      return all.filter(item => item.dueDate > today);
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list.map(item => {
        const status = item.completed ? '[x]' : '[ ]';
        const displayDate = item.dueDate === new Date().toISOString().split("T")[0] ? '' : item.dueDate;
        return `${status} ${item.title} ${displayDate}`;
      }).join('\n');
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  module.exports = todoList;