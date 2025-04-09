const HOST = process.env.NEXT_PUBLIC_SERVER_URL;

const AUTH_ROUTES = "api/auth";
const SIGN_UP_ROUTE = `${AUTH_ROUTES}/sign-up`;
const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
const GET_USER_INFO_ROUTE = `${AUTH_ROUTES}/user-info`;
const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/user-info`;
const ADD_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}/profile-pic`;
const DELETE_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}/profile-pic`;
const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

const CONTACT_ROUTES = "api/contact";
const SEARCH_CONTACT_ROUTE = `${CONTACT_ROUTES}/search-contact`;

const MESSAGE_ROUTES = "api/message";
const GET_MESSAGES_ROUTE = `${MESSAGE_ROUTES}/messages`;
const UPLOAD_FILE_ROUTE = `${MESSAGE_ROUTES}/files`;

const CHAT_ROUTES = "api/chat";
const CREATE_PERSONAL_CHAT_ROUTE = `${CHAT_ROUTES}/personal-chat`;
const ADD_CHAT_PIC_ROUTE = `${CHAT_ROUTES}/chat-pic`;
const REMOVE_CHAT_PIC_ROUTE = `${CHAT_ROUTES}/remove-chat-pic`;
const CREATE_GROUP_CHAT_ROUTE = `${CHAT_ROUTES}/group-chat`;
const GET_CHATS_ROUTE = `${CHAT_ROUTES}/chats`;
const GET_CHAT_MESSAGES_ROUTE = `${CHAT_ROUTES}/get-chat-messages`;
const GET_CHAT_DATA = `${CHAT_ROUTES}/get-chat`;

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
  SEARCH_CONTACT_ROUTE,
  GET_MESSAGES_ROUTE,
  UPLOAD_FILE_ROUTE,
  CREATE_PERSONAL_CHAT_ROUTE,
  ADD_CHAT_PIC_ROUTE,
  REMOVE_CHAT_PIC_ROUTE,
  CREATE_GROUP_CHAT_ROUTE,
  GET_CHATS_ROUTE,
  GET_CHAT_MESSAGES_ROUTE,
  GET_CHAT_DATA
};
