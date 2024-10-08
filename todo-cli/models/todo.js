'use strict';
const {
  Model
} = require('sequelize');
const { Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");
      const overdueTodos = await Todo.overdue();
      const dueTodayTodos = await Todo.dueToday();
      const dueLaterTodos = await Todo.dueLater();
      console.log("Overdue");
      // FILL IN HERE
      overdueTodos.forEach((todo, index) => {
        console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.title} ${todo.dueDate}`);
      });
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      dueTodayTodos.forEach((todo, index) => {
        console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.title}`);
      });
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      dueLaterTodos.forEach((todo, index) => {
        console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.title} ${todo.dueDate}`);
      });
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      const today = new Date().toISOString().split('T')[0];
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.lt]: today
          }
        }
      });
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      const today = new Date().toISOString().split('T')[0];
      return await Todo.findAll({
        where: {
          dueDate: today
        }
      });
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      const today = new Date().toISOString().split('T')[0];
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: today
          }
        }
      });
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      return await Todo.update({ completed: true }, {
        where: {
          id: id
        }
      });
    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      let dueDate = new Date().toISOString().split("T")[0] === this.dueDate ? '' : ` ${this.dueDate}`;
      return `${this.id}. ${checkbox} ${this.title}${dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};