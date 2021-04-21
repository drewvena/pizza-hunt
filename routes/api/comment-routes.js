const router = require('express').Router();
const {addComment, 
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller')

router.route('/:pizzaId').post(addComment)
router.route('/:pizzaId/:commentId').delete(removeComment)
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply)
.put(addReply)
.delete(removeComment)
module.exports = router;