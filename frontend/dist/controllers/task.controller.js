const db = require("../models");
const Task = db.tasks;
// Create and Save new Task
exports.create = (req, res) => {
    const jane = yield User.create({ firstName: "Jane", lastName: "Doe" });
};
// Get Task with id in request 
exports.findOne = (req, res) => {
    const project = yield Project.findByPk(123);
};
// Update Task with id in request 
exports.update = (req, res) => {
    jane.set({
        name: "Ada",
        favoriteColor: "blue"
    });
    // As above, the database still has "Jane" and "green"
    yield jane.save();
};
// Delete Task with id in request
exports.delete = (req, res) => {
    yield User.destroy({
        where: {
            firstName: "Jane"
        }
    });
};
// Get all Tasks in Database 
exports.findAll = (req, res) => {
    const users = yield User.findAll();
};
// Delete All Tasks in Database
exports.deleteAll = (req, res) => {
};
//# sourceMappingURL=task.controller.js.map