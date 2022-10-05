const router = require('express').Router();
const inmueble = require('../../models/inmueble');
router.get('/', async (req, res) => {
  try {
    const inmuebles = await inmueble.find();
    res.json(inmuebles);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  console.log('-----------POST REQ.BODY: ', req.body);
  try {
    const result = await inmueble.create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});
router.put('/:inmuebleId', async (req, res) => {
  try {
    const result = await inmueble.findByIdAndUpdate(
      req.params.inmuebleId,
      req.body,
      { new: true }
    );
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});
router.delete('/:inmuebleId', async (req, res) => {
  try {
    const result = await inmueble.findByIdAndDelete(req.params.inmuebleId);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
