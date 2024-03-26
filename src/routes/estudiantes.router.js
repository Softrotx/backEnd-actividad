const { Estudiante } = require('../models');
const { Router } = require('express')

const router = Router()


router.get('/', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({})
        res.status(200).json({
            status: "Success", estudiantes

        }

        )
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'cannot get users'
        })

    }


})
router.get('/:dni', async (req, res) => {
    try {
        const dniEstudiante = req.params.dni
        const estudiante = await Estudiante.find({ dni: dniEstudiante})
        if (estudiante[0]){
            res.status(200).json({
                status: "Success", estudiante
    
            })
            
        }else{
            res.status(400).json({
                status: "Error", Msg: "no fue posible encontrar el DNI indicado"
                
    
            })
        }


        
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'cannot get users'
        })

    }


})

router.post('/', async (req, res) => {
    try {
        const datosEstudiante = await req.body

        const agregarEstudiante = await Estudiante.create(datosEstudiante)
        res.status(201).json({
            result: 'success',
            stats: agregarEstudiante
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'ocurrio un error al ingresar el estudiante'
        })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const idEstudiante = req.params.id 
        const UpdateContent = req.body

        const updateEstudiante = await Estudiante.findByIdAndUpdate(idEstudiante, UpdateContent)
        res.status(201).json({
            result: 'success',
            stats: await updateEstudiante
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'ocurrio un error al modificar el estudiante'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const idEstudiante = req.params.id 

        const estudianteEliminado = await Estudiante.findByIdAndDelete(idEstudiante)
        res.status(201).json({
            result: 'Usuario Eliminado',
            stats: await estudianteEliminado
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            result: 'error',
            message: 'ocurrio un error al eliminar al estudiante'
        })
    }
})

module.exports = router