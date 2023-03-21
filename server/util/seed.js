const { sequelize } = require("./database");
const { Emotion } = require("../models/emotion");

const emotions = [
  {
    name: "Anger",
  },

  {
    name: "Annoyance",
  },

  {
    name: "Contempt",
  },

  {
    name: "Disgust",
  },

  {
    name: "Irritation",
  },

  {
    name: "Anxiety",
  },

  {
    name: "Embarrassment",
  },

  {
    name: "Fear",
  },

  {
    name: "Helplessness",
  },

  {
    name: "Powerlessness",
  },

  {
    name: "Worry",
  },

  {
    name: "Pride",
  },

  {
    name: "Doubt",
  },

  {
    name: "Envy",
  },

  {
    name: "Frustration",
  },

  {
    name: "Guilt",
  },

  {
    name: "Shame",
  },

  {
    name: "Boredom",
  },

  {
    name: "Despair",
  },

  {
    name: "Disappointment",
  },

  {
    name: "Hurt",
  },

  {
    name: "Sadness",
  },

  {
    name: "Stress",
  },

  {
    name: "Shock",
  },

  {
    name: "Tension",
  },

  {
    name: "Amusement",
  },

  {
    name: "Delight",
  },

  {
    name: "Elation",
  },

  {
    name: "Excitement",
  },

  {
    name: "Happiness",
  },

  {
    name: "Joy",
  },

  {
    name: "Pleasure",
  },

  {
    name: "Affection",
  },

  {
    name: "Empathy",
  },

  {
    name: "Friendliness",
  },

  {
    name: "Love",
  },

  {
    name: "Courage",
  },

  {
    name: "Hope",
  },

  {
    name: "Humility",
  },

  {
    name: "Satisfaction",
  },

  {
    name: "Trust",
  },

  {
    name: "Calmness",
  },

  {
    name: "Contentment",
  },

  {
    name: "Relaxation",
  },

  {
    name: "Relief",
  },

  {
    name: "Serenity",
  },

  {
    name: "Interest",
  },

  {
    name: "Politeness",
  },

  {
    name: "Surprise",
  },
];

const seedDatabase = async () => {
    await Emotion.bulkCreate(emotions)
}

module.exports = {
    seedDatabase
}