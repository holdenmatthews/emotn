require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { SERVER_PORT } = process.env
const { register, login } = require('./controllers/authCtrl')
// const { getAllLogs, addLog } = require('./controllers/logsCtrl')
const { sequelize } = require('./util/database')
const { User } = require('./models/user')
const { Log } = require('./models/log')
const { LogEmotion } = require('./models/logEmotion')
const { Emotion } = require('./models/emotion')
// const { seedDatabase } = require('./util/seed')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Log)
Log.belongsTo(User)

Log.hasMany(LogEmotion)
LogEmotion.belongsTo(Log)

Emotion.hasMany(LogEmotion)
LogEmotion.belongsTo(Emotion)

app.post('/api/register', register)
app.post('/api/login', login)

// app.get('/api/logs', getAllLogs)
// app.post('/api/logs', addLog)

// sequelize.sync({ force: true }).then(() => seedDatabase())
sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, () => console.log(`better go catch that server! (she's up and running on port ${SERVER_PORT})`))
})
.catch(err => console.log(err))
