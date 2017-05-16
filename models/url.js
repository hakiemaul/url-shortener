'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    link: DataTypes.STRING,
    click_count: DataTypes.INTEGER,
    url_short: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: (url) => {
        let chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        chars = chars.split('');
        let id = url.id;
        let unique = []
        for(let i = 0; i < 5; i++) {
          let index = Math.floor((Math.random() * 61) + 1);
          unique.push(chars[index])
        }
        url.url_short = unique.join('');
        url.click_count = 0;
      }
    }
  });
  return Url;
};