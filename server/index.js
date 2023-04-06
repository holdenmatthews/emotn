require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require("path")
const { PORT } = process.env
const { register, login } = require('./controllers/authCtrl')
const { getAllLogs, addLog, getEmotions, deleteLog, updateNotes } = require('./controllers/logsCtrl')
const { sequelize } = require('./util/database')
const { User } = require('./models/user')
const { Log } = require('./models/log')
const { LogEmotion } = require('./models/logEmotion')
const { Emotion } = require('./models/emotion')
const { isAuthenticated } = require('./middleware/isAuthenticated')
// const { seedDatabase } = require('./util/seed')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, "../build")))

User.hasMany(Log)
Log.belongsTo(User)

Log.hasMany(LogEmotion)
LogEmotion.belongsTo(Log)

Emotion.hasMany(LogEmotion)
LogEmotion.belongsTo(Emotion)

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/logs/', isAuthenticated, getAllLogs)
app.post('/api/logs/', isAuthenticated, addLog)
app.delete('/api/logs/:logId', isAuthenticated, deleteLog)
app.put('/api/logs/:logId', isAuthenticated, updateNotes)

app.get('/api/emotions', isAuthenticated, getEmotions)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

// sequelize.sync({ force: true }).then(() => seedDatabase())
sequelize.sync()
.then(() => {
    app.listen(PORT, () => console.log(`better go catch that server! (she's up and running on port ${PORT})`))
})
.catch(err => console.log(err))
