const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Employee extends Model {
  calculatePerformance() {
    return (this.discipline * 0.4) +
           (this.productivity * 0.4) +
           (this.attendance * 0.2);
  }

  averageScore() {
    return (this.discipline + this.productivity + this.attendance) / 3;
  }

  status() {
    return this.averageScore() >= 70
      ? "Kinerja Baik"
      : "Perlu Evaluasi";
  }
}

Employee.init({
  name: DataTypes.STRING,
  discipline: DataTypes.INTEGER,
  productivity: DataTypes.INTEGER,
  attendance: DataTypes.INTEGER
}, {
  sequelize,
  modelName: "Employee"
});

module.exports = Employee;
