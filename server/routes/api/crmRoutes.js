const router = require('express').Router();
const { CRM } = require('../../models/');




router.get('/crm', (req, res) => {
    CRM.findAll()
      .then(crmData => {
        res.send(crmData);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving CRM data');
      });
  });
  
router.get('/crm/:id', (req, res) => {
    const id = req.params.id;
    CRM.findByPk(id)
      .then(crmData => {
        res.send(crmData);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error retrieving CRM data');
      });
  });
  
router.post('/crm', (req, res) => {
    const { user_id, business_name, address, zipcode, geocodes, sales_pipeline_stage } = req.body;
    CRM.create({
      User_Id: user_id,
      Business_Name: business_name,
      Address: address,
      Zipcode: zipcode,
      Geocodes: geocodes,
      Sales_Pipeline_Stage: sales_pipeline_stage
    })
      .then(() => {
        res.send('CRM data added...');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error adding CRM data');
      });
  });
  
router.put('/crm/:id', (req, res) => {
    const id = req.params.id;
    const { user_id, business_name, address, zipcode, geocodes, sales_pipeline_stage } = req.body;
    CRM.update({
      User_Id: user_id,
      Business_Name: business_name,
      Address: address,
      Zipcode: zipcode,
      Geocodes: geocodes,
      Sales_Pipeline_Stage: sales_pipeline_stage
    }, {
      where: { ID: id }
    })
      .then(() => {
        res.send('CRM data updated...');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error updating CRM data');
      });
  });
  
router.delete('/crm/:id', (req, res) => {
    const id = req.params.id;
    CRM.destroy({
      where: { ID: id }
    })
      .then(() => {
        res.send('CRM data deleted...');
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Error deleting CRM data');
      });
  });

  module.exports = router;