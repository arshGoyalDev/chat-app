const HOST = process.env.NEXT_PUBLIC_SERVER_URL;

const AUTH_ROUTES = "api/auth";
const SIGN_UP_ROUTE = `${AUTH_ROUTES}/sign-up`;
const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
const GET_USER_INFO_ROUTE = `${AUTH_ROUTES}/user-info`;
const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/update-profile`;
const ADD_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
const DELETE_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}/delete-profile-image`;
const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

const CONTACT_ROUTES = "api/contact";
const SEARCH_CONTACT_ROUTE = `${CONTACT_ROUTES}/search-contact`;
const GET_PERSONAL_CONTACTS_ROUTE = `${CONTACT_ROUTES}/get-personal-contacts`;
const GET_ALL_CONTACTS = `${CONTACT_ROUTES}/get-all-contacts`;

const MESSAGE_ROUTES = "api/messages";
const GET_MESSAGES_ROUTE = `${MESSAGE_ROUTES}/get-messages`;
const UPLOAD_FILE_ROUTE = `${MESSAGE_ROUTES}/upload-file`;

const GROUP_ROUTES = "api/group";
const ADD_GROUP_PIC_ROUTE = `${GROUP_ROUTES}/add-group-pic`;
const REMOVE_GROUP_PIC = `${GROUP_ROUTES}/remove-group-pic`;

export {
  HOST,
  AUTH_ROUTES,
  SIGN_UP_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  GET_USER_INFO_ROUTE,
  UPDATE_PROFILE_ROUTE,
  ADD_PROFILE_PIC_ROUTE,
  DELETE_PROFILE_PIC_ROUTE,
  CONTACT_ROUTES,
  GET_PERSONAL_CONTACTS_ROUTE,
  SEARCH_CONTACT_ROUTE,
  GET_ALL_CONTACTS,
  GET_MESSAGES_ROUTE,
  UPLOAD_FILE_ROUTE,
  ADD_GROUP_PIC_ROUTE,
  REMOVE_GROUP_PIC,
};
