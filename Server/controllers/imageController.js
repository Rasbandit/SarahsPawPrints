const app = require('./../index');

const db = app.get('db');

module.exports = {

  getPortraits(req, res) {
    db.get_portraits((err, products) => {
      res.status(200).send(products);
    });
  },

  getOthers(req, res) {
    db.get_other((err, products) => {
      res.status(200).send(products);
    });
  },

  upload(req, res) {
    const file = req.files.file;
    const stream = fs.createReadStream(file.path);
    return s3fsimp.writeFile(file.origninalFilename, stream).then(() => {
      fs.unlink(file.path, (err) => {
        console.log(err);
        if(err) {
        }
      });
      res.redirect('/profile');
    });
  }

};
