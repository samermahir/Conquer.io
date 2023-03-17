const router = require("express").Router();
const { CRM } = require("../../models/");

router.get("/", (req, res) => {
  CRM.findAll()
    .then((crmData) => {
      res.send(crmData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving CRM data");
    });
});

router.get("/crm/:id", (req, res) => {
  const id = req.params.id;
  CRM.findByPk(id)
    .then((crmData) => {
      res.send(crmData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving CRM data");
    });
});

router.post("/bulk", async (req, res) => {
  try {
    const dbRes = await CRM.bulkCreate(req.body.payload);
    console.log(dbRes)
    res.json({ success: true });
  } catch (err) {
    console.log("error in bulk create", err);
  }
});

router.post("/crm", (req, res) => {
  const {
    Name,
    StageNumber,
    StageName,
    Address,
    Zip,
    City,
    State,
    Latitude,
    Longitude,
  } = req.body;
  CRM.create({
    Name: Name,
    StageNumber: StageNumber,
    StageName: StageName,
    Address: Address,
    Zip: Zip,
    City: City,
    State: State,
    Latitude: Latitude,
    Longitude: Longitude,
  })
    .then(() => {
      res.send("CRM data added...");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error adding CRM data");
    });
});

router.put("/crm/:id", (req, res) => {
  const id = req.params.id;
  const {
    Name,
    StageNumber,
    StageName,
    Address,
    Zip,
    City,
    State,
    Latitude,
    Longitude,
  } = req.body;
  CRM.update(
    {
      Name: Name,
      StageNumber: StageNumber,
      StageName: StageName,
      Address: Address,
      Zip: Zip,
      City: City,
      State: State,
      Latitude: Latitude,
      Longitude: Longitude,
    },
    {
      where: { ID: id },
    }
  )
    .then(() => {
      res.send("CRM data updated...");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating CRM data");
    });
});

router.delete("/crm/:id", (req, res) => {
  const id = req.params.id;
  CRM.destroy({
    where: { ID: id },
  })
    .then(() => {
      res.send("CRM data deleted...");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting CRM data");
    });
});

module.exports = router;
