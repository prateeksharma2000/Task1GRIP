module.exports.setFlash = function(req,res,next){
    res.locals.flashMessages = req.flash();
    next();
}