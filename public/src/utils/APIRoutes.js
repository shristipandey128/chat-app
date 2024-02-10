const host = "http://localhost:5000";
const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const logoutRoute = `${host}/api/auth/logout`;
const allUsersRoute = `${host}/api/auth/allusers`;
const sendMessageRoute = `${host}/api/messages/addmsg`;
const getAllMessageRoute = `${host}/api/messages/getAllmsg`;
const setAvatarRoute = `${host}/api/auth/setavatar`;

module.exports = {
  host,
  loginRoute,
  registerRoute,
  logoutRoute,
  allUsersRoute,
  sendMessageRoute,
  getAllMessageRoute,
  setAvatarRoute
};
