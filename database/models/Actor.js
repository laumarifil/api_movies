module.exports = function(sequelize, datatypes){
    
    let alias = 'Actor';
    
    let cols = {

        id: {
            type: datatypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: datatypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: datatypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: datatypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        favorite_movie_id: {
            type: datatypes.INTEGER(10).UNSIGNED,
            allowNull: true
        }
    }
    
    
    let config = {
        tableName : 'actors',
        timestamps : true,
        underscored: true
    }
    
    let actor = sequelize.define(alias, cols, config);
    return actor;
    
}