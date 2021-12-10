const router = require('express').Router();
const { Appointment, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('=================');
    Appointment.findAll({
        attributes: ['id', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['user_id']
            }
        ]
    })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Appointment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id'],
      include: [
        {
          model: User,
          attributes: ['user_id']
        }
      ]
    })
      .then(dbAppointmentData => {
        if (!dbAppointmentData) {
          res.status(404).json({ message: 'No appointment found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
