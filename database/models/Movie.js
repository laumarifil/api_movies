module.exports = function(sequelize, datatypes){
    let alias = 'Movie';
    let cols = {
        id: {
            type: datatypes.INTEGER(10).UNSIGNED,
            primaryKey : true,
            autoIncrement : true
        },
        title: {
            type: datatypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: datatypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: datatypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: datatypes.DATE,
            allowNull: false
        },
        length: {
            type: datatypes.INTEGER(10).UNSIGNED

        }
    }
    let config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true,
    }
    let movie = sequelize.define(alias, cols, config);
    return movie; 
}