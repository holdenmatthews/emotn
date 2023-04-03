const { sequelize } = require("./database");
const { Emotion } = require("../models/emotion");

const emotions = [
  { name: 'Affection' },
  { name: 'Amusement' },
  { name: 'Anger' },
  { name: 'Annoyance' },
  { name: 'Anxiety' },
  { name: 'Boredom' },
  { name: 'Calmness' },
  { name: 'Contempt' },
  { name: 'Contentment' },
  { name: 'Courage' },
  { name: 'Delight' },
  { name: 'Depression' },
  { name: 'Despair' },
  { name: 'Disappointment' },
  { name: 'Disgust' },
  { name: 'Doubt' },
  { name: 'Elation' },
  { name: 'Embarrassment' },
  { name: 'Empathy' },
  { name: 'Envy' },
  { name: 'Excitement' },
  { name: 'Fear' },
  { name: 'Friendliness' },
  { name: 'Frustration' },
  { name: 'Guilt' },
  { name: 'Happiness' },
  { name: 'Helplessness' },
  { name: 'Hope' },
  { name: 'Humility' },
  { name: 'Hurt' },
  { name: 'Interest' },
  { name: 'Irritation' },
  { name: 'Joy' },
  { name: 'Love' },
  { name: 'Pleasure' },
  { name: 'Politeness' },
  { name: 'Powerlessness' },
  { name: 'Pride' },
  { name: 'Relaxation' },
  { name: 'Relief' },
  { name: 'Sadness' },
  { name: 'Satisfaction' },
  { name: 'Serenity' },
  { name: 'Shame' },
  { name: 'Shock' },
  { name: 'Stress' },
  { name: 'Surprise' },
  { name: 'Tension' },
  { name: 'Trust' },
  { name: 'Worry' }
];

const seedDatabase = async () => {
    await Emotion.bulkCreate(emotions)
}

module.exports = {
    seedDatabase
}