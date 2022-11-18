module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '185.239.210.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u326353748_apianpsinep'),
      user: env('DATABASE_USERNAME', 'u326353748_anpsinep'),
      password: env('DATABASE_PASSWORD', 'Anpsinep#2022@'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
