const { Router } = require("express");
const router = Router();

const {
  postLocation,
  getAllLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
} = require("../../controller/controllerRegistros/cLocation.js");

router.post("/", async (req, res) => {
  const locacions = req.body;
  // console.log(locacions);
  try {
    const newLocation = await postLocation(locacions);
    return res.status(200).json(newLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allLocation = await getAllLocation();
    return res.status(200).json(allLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const location = await getLocationById(id);
    return res.status(200).json(location);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nLocation = req.body.data;
  try {
    const editLocation = await updateLocation(id, nLocation);
    return res.status(200).json(editLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteLocations = await deleteLocation(id);
    if (!deleteLocations.error) {
      return res.status(404).json(deleteLocations);
    }
    return res.status(200).json(deleteLocations);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
