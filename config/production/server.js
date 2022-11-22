module.exports = ({env})= ({
    url:this.env('https://api-anpsinep.herokuapp.com/'),
    proxy:true,
    app:{
        keys: env.array('APP_KEYS', ['gTthbjSBwGS8WlSQexyB+A==','70MYsbNeOP10hJA31pEP/w==','2r5fLxa4lGV1TSoWrzdiLQ==','CGMSTuM0N7D68kq/+rfpmw=='])
    }
})