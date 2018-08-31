var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app,passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', 
        {
        successRedirect: '/profile',
        failureRedirect: '/signup'
        }
    )); 

    app.get('/profile',isLoggedIn, authController.profile);

    app.get('/logout',authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/signin');
    }
    // Route for getting some data about our user to be used client side
    app.get("/userdata", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        firstname:req.user.firstname,
        id: req.user.id
      });
    }
    });
    // Render 404 page for any unmatched routes
    app.get("/*", function(req, res) {
      res.render("404");
    });
}








