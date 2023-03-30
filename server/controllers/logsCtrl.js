const { User } = require("../models/user");
const { Log } = require("../models/log");
const { LogEmotion } = require("../models/logEmotion");
const { Emotion } = require("../models/emotion");

module.exports = {
  getAllLogs: async (req, res) => {
    console.log("getAllLogs hit");
    try {
      const { userId } = req
      const logs = await Log.findAll({
        where: { userId: userId },
        include: [
          {
            model: LogEmotion,
            required: true,
            include: [
              {
                model: Emotion,
              },
            ],
          },
        ],
      });
      res.status(200).send(logs);
    } catch (err) {
      console.log("ERROR IN getAllLogs");
      console.log(err);
      res.sendStatus(400);
    }
  },

  addLog: async (req, res) => {
    console.log("addLoghit");
    try {
      const { userId } = req
      const { notes, datetime, emotionValues } = req.body;
      console.log(emotionValues);
      const newLog = await Log.create({ userId, notes, datetime });
      Object.keys(emotionValues).forEach(async (key) => {
        const emotionId = key;
        const emotion_value = emotionValues[key];
        await LogEmotion.create({
          logId: newLog.id,
          emotionId,
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
    } catch (err) {
      console.log("ERROR IN getEmotions");
      console.log(err);
      res.sendStatus(400);
    }
  },

  deleteLog: async (req, res) => {
    console.log("deleteLog hit");
    try {
      const { logId } = req.params;
      await Log.destroy({ where: { id: +logId } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  updateNotes: async (req, res) => {
    console.log("updateLog hit");
    try {
      const { logId } = req.params;
      await Log.update(
        {
          notes
        },
        { where: logId }
      )
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
