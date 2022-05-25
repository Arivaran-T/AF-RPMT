const Router = require("express").Router;
const router = Router();
const fileUpload = require("express-fileupload");

const DocumentCtrl = require("../Controller/DocumentCtrl");

router.use(fileUpload());

//user
router.route("/users/:_id").get(DocumentCtrl.GetUserDoc);

//staff
router
  .route("/staff/:_id")
  .get(DocumentCtrl.GetStaffDoc)
  .put(DocumentCtrl.AddGrade);

//submision
router.route("/:_id/:user_id").get(DocumentCtrl.GetSubmissionDoc);

//single document
router
  .route("/:_id")
  .get(DocumentCtrl.GetDoc)
  .post(DocumentCtrl.AddDocument)
  .put(DocumentCtrl.EditDoc)
  .delete(DocumentCtrl.DeleteDoc);

//all document
router.route("/").get(DocumentCtrl.GetDocs);

module.exports = router;
