const i18n = require('i18n');
const authService = require('../service');
const response = require("../../common/response");

exports.login = async (req, res) => {
    try {
        let payload = {
            email: req.body.email,
            password: req.body.password,
            role_id: req.body.role
        }
        console.log(payload);
        let user = await authService.login(payload);
        response.success(res, user);
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};


exports.signup = async (req, res) => {
    try {
        let payload = {
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            full_name: req.body.full_name,
            role_id: req.body.role,
            type: req.body.type,
        }

        console.log(payload);
        let user = await authService.signup(payload);
        response.success(res, user);
    } catch (e) {
        console.log("e : ", e);
        response.error(res, e, req);
    }
};


//
// exports.verifyOTP = async (req, res) => {
//   try {
//     let mobile = req.body.mobile;
//     let countryId = req.body.country_id || SystemSettings.KSA_COUNTRY_ID;
//     let code = req.body.code;
//     let user = await userService.verifyOTP(mobile, countryId, code);
//     resWrapper.success(res, user);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
// exports.getMyProfile = async (req, res) => {
//   let userId = req.user.user.user_id;
//   try {
//     let user = await userService.getMyProfile(userId);
//     resWrapper.success(res, user);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
// exports.getUserDetails = async (req, res) => {
//   let userId = req.params.user_id;
//   try {
//     let user = await userService.getUserDetails(userId);
//     resWrapper.success(res, user);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
// exports.updateMyUserProfile = async (req, res) => {
//   let user = req.body;
//   let userId = req.user.user.user_id;
//
//   if (req.files && req.files.length > 0) {
//     user.avatar_image = req.files[0].filename;
//     user.file = req.files[0].path
//   }
//
//   try {
//     let updatedUser = await userService.updateMyUserProfile(userId, user);
//     resWrapper.success(res, updatedUser);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
// exports.updateLocation = async (req, res) => {
//   let user = req.body;
//   let userId = req.user.user.user_id;
//
//   try {
//     let updatedUser = await userService.updateLocation(userId, user);
//     resWrapper.success(res, updatedUser);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
//
// exports.createBillingDetail = async (req, res) => {
//   try {
//
//     let userId = req.user.user.user_id;
//
//     let dto = {
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       street1: req.body.street1,
//       city: req.body.city,
//       state: req.body.state,
//       city_id: req.body.city_id,
//       state_id: req.body.state_id,
//       country: req.body.country,
//       postcode: req.body.postcode,
//     };
//
//     let billingDetail = await userService.createOrUpdateBillingDetail(dto, userId);
//     resWrapper.success(res, billingDetail);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
//
// exports.updateBillingDetail = async (req, res) => {
//
//   let userId = req.user.user.user_id;
//
//   let dto = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     street1: req.body.street1,
//     city: req.body.city,
//     state: req.body.state,
//     city_id: req.body.city_id,
//     state_id: req.body.state_id,
//     country: req.body.country,
//     postcode: req.body.postcode,
//   };
//
//   try {
//     let updatedDto = await userService.createOrUpdateBillingDetail(dto,userId);
//     resWrapper.success(res, updatedDto);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
// exports.getBillingDetail = async (req, res) => {
//   let userId = req.user.user.user_id;
//   try {
//     let billingDetail = await userService.getBillingDatailByUserId(userId);
//     resWrapper.success(res, billingDetail);
//   } catch (e) {
//     resWrapper.error(res, e, req);
//   }
// };
//
//
// exports.sendDeleteVerifyCode = async (req, res) => {
//   try {
//     let userId = req.user.user.user_id;
//     let user = await userService.sendDeleteVerifyCode(userId);
//     resWrapper.success(res, user);
//   } catch (e) {
//     resWrapper.error(res, e);
//   }
// };
//
// exports.deleteAccount = async (req, res) => {
//   try {
//     let userId = req.user.user.user_id;
//     let code = req.body.code;
//     let user = await userService.deleteAccount(userId, code);
//     resWrapper.success(res, user);
//   } catch (e) {
//     resWrapper.error(res, e);
//   }
// };
