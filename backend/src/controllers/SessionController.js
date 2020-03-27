const connection = require('../database/connection');

module.exports = {
  async store(req, res){
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    return !ong ? res.status(400).json({ error: "ONG not found"}) : res.json(ong);
  }
}