module.exports = (sequelize, DateTypes) => {
    const Comments = sequelize.define("Comments", {
     
      commentBody: {
        type: DateTypes.STRING,
        allowNull: false,
      },
    });
  
    return Comments;
  };
  