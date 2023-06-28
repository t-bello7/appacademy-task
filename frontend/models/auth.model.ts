const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config.ts');

const User = sequelize.define('User',{
	userName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
})


(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
