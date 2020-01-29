module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarberDB',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
