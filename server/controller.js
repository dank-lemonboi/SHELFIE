module.exports = {

  readShelves: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.params.id)
    db.readShelves([req.params.id]).then(shelves => res.status(200).send(shelves))
   },
  createBin: (req, res) => {
      const db = req.app.get("db")
      db.createBin([req.params.id.charAt(0), req.params.id.charAt(1), req.body.name, +req.body.price]).then( () => res.status(200).send())
   },
  readBin: (req, res) => {
      const db = req.app.get("db")
      db.readBin([req.params.id.charAt(0), req.params.id.charAt(1)]).then( bin => res.status(200).send(bin))

      },
  updateBin: ( req, res ) => {
    //   console.log(req.body)
      const db = req.app.get("db")
      db.updateBin([req.params.id.charAt(0), req.params.id.charAt(1), req.body.name, req.body.price])
      .then( bin => res.status(200).send(bin))
   },
  deleteBin: (req, res) => {
      const db = req.app.get('db')
      db.deleteBin([req.params.id.charAt(0), req.params.id.charAt(1)])
      .then( () => res.status(200).send() )
   }
  }

