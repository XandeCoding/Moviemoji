const GradeController = require('../controllers/gradeController');

const gradeRouter = [];

gradeRouter.push({
  method: 'POST',
  path: '/grades',
  handler: async (req, res) => {
    const { payload } = req;

    return res.response(await GradeController.insertGrade(payload)).code(200);
  }
})

gradeRouter.push({
  method: 'GET',
  path: '/grades/{id?}',
  handler: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.response(await GradeController.getAllGrades()).code(200)
    }

    return res.response(await GradeController.getGrade(id)).code(200)
  }
})

gradeRouter.push({
  method: 'GET',
  path: '/gradesByMovie/{id}',
  handler: async (req, res) => {
    const { id } = req.params;

    return res.response(await GradeController.getGradeByMovie(id)).code(200)
  }
})

gradeRouter.push({
  method: 'DELETE',
  path: '/grades/{id}',
  handler: async (req, res) => {
    const { id } = req.params

    return res.response(await GradeController.deleteGrade(id)).code(200)
  }
})

gradeRouter.push({
  method: 'PUT',
  path: '/grades/{id}',
  handler: async (req, res) => {
    const { id } = req.params
    const { payload } = req

    return res.response(await GradeController.updateGrade(id, payload)).code(200)
  }
})

module.exports = gradeRouter
