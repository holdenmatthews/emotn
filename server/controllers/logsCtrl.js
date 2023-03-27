const { User } = require("../models/user");
const { Log } = require("../models/log");
const { LogEmotion } = require("../models/logEmotion");
const { Emotion } = require("../models/emotion");

module.exports = {
  getAllLogs: async (req, res) => {
    console.log("getAllLogs hit");
    try {
      //select all logs where user_id === user_id
      //select all log_emotions (emotion_value) where log_id === log_id
      //select all emotion_names where emotion_id === emotion_id
    } catch (err) {
      console.log("ERROR IN getAllLogs");
      console.log(err);
      res.sendStatus(400);
    }
  },

  addLog: async (req, res) => {
    console.log("addLoghit");
    try {
      const { userId } = req.params;
      const { notes, datetime, emotionValues } = req.body;
      console.log(emotionValues);
      const newLog = await Log.create({ userId, notes, datetime });
      Object.keys(emotionValues).forEach(async (key, i) => {
        const emotion_id = key;
        const emotion_value = emotionValues[key];
        await LogEmotion.create({
          logId: newLog.id,
          emotion_id,
          emotion_value,
        });
      });
      res.sendStatus(200);
    } catch (err) {
      console.log("ERROR IN addLog");
      console.log(err);
      res.sendStatus(400);
    }
  },

  getEmotions: async (req, res) => {
    console.log("getEmotions hit");
    try {
      const emotions = await Emotion.findAll({});
      // console.log(emotions)
      res.status(200).send(emotions);
    } catch {
      console.log("ERROR IN getEmotions");
      console.log(err);
      res.sendStatus(400);
    }
  },
};
