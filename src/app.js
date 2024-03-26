const express = require('express');
const mongoose = require('mongoose');
const EstudiantesRouter = require('./routes/estudiantes.router')

const app = express();

// permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/estudiantes', EstudiantesRouter)

const main = async () => {

    await mongoose.connect(
        'mongodb+srv://ccfuentes91:E410bd48b9*1234qwer@backendtesting.kmllbfb.mongodb.net/?retryWrites=true&w=majority&appName=backEndTesting',
        { dbName: 'backEndTesting' }


    )
    app.listen(8080, () => {
        console.log('Server up!')
    })

}
main()

