
module.exports = {
    getComments: (req, res, next) => {
        const db = req.app.get('db')

        db.get_comment()
        .then(dbResponse => res.status(200).send(dbResponse))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
        })
    },

    addComment: (req, res, next) => {
        const db = req.app.get('db')
        const {topic, text} = req.body

        // topic and text are the column names
        db.add_comment([topic, text])
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
        })
    },

    updateComment: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {topic, text} = req.body

        db.update_comment([id, topic, text])
        .then(data => res.status(200).send(data) )
    },

    deleteComment: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_comment(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Negatory! Failure!'})
            console.log(err)
        })
    }

}