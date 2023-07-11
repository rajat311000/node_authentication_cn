const express = require('express');
const router = express.Router();
const passport = require('passport');
//------------ Importing Controllers ------------//
const usersController = require('../controllers/users_controller');

router.get('/profile/', passport.checkAuthentication, usersController.profile);


//------------ signup Route ------------//
router.get('/sign-up', usersController.signUp);

//------------ signIn Route ------------//
router.get('/sign-in', usersController.signIn);

//------------ signUp post Route ------------//
router.post('/create', usersController.create);

// use passport as a middleware to authenticate
//------------ signIn post Route ------------//
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

//------------ sign-out Route ------------//
router.get('/sign-out', usersController.destroySession);


//------------ google auth ------------//
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

//------------ google auth callback------------//
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersController.createSession);
//------------ Reset password------------//
router.get('/reset-password', usersController.resetPassword);

//------------ send-reset-pass-mail ------------//
router.post('/send-reset-pass-mail', usersController.resetPassMail);

//------------ reset-password from  accessToken------------//
router.get('/reset-password/:accessToken', usersController.setPassword);


//------------ update-password from accessToken post route ------------//
router.post('/update-password/:accessToken', usersController.updatePassword);



module.exports = router;