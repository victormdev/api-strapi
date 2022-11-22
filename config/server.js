module.exports = ({ env }) => ({
  url:this.env('https://api-anpsinep.herokuapp.com/'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['gTthbjSBwGS8WlSQexyB+A==','70MYsbNeOP10hJA31pEP/w==','2r5fLxa4lGV1TSoWrzdiLQ==','CGMSTuM0N7D68kq/+rfpmw=='])
  },
});
