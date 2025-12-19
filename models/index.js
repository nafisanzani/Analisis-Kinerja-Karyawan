const sequelize = require("../config/database");
const Employee = require("./employee");
const Department = require("./department");

// relasi antar tabel
Department.hasMany(Employee);
Employee.belongsTo(Department);

module.exports = {
  sequelize,
  Employee,
  Department
};
