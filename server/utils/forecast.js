const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/[key]/'+latitude+','+longitude

    request({ url: url, json: true }, (error,{body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '\n degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')   
        }
    })
}

module.exports = forecast
