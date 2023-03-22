const { User } = require('../models/user')
const { Log } = require('../models/log')
const { LogEmotion } = require('../models/logEmotion')
const { Emotion } = require('../models/emotion')

module.exports = {
    getAllLogs: async (req, res) => {
        console.log('getAllLogs hit')
        try {
//select all logs where user_id === user_id
//select all log_emotions (emotion_value) where log_id === log_id
//select all emotion_names where emotion_id === emotion_id
        } catch (err) {
            console.log('ERROR IN getAllLogs')
            console.log(err)
            res.sendStatus(400)
        }
    },

    addLog: async (req, res) => {
        console.log('addLoghit')
        try {
//insert user_id, log_notes, and log_datetime
//for each emotion (insert log_id, emotion_id, & emotion_value)
        } catch (err) {
            console.log('ERROR IN addLog')
            console.log(err)
            res.sendStatus(400)
        }
    },

    getEmotions: async (req, res) => {
        console.log('getEmotions hit')
        try {
//get list of all emotions & id's from table
        } catch {
            console.log('ERROR IN getEmotions')
            console.log(err)
            res.sendStatus(400)
        }
    }
}