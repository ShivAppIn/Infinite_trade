export const OFFLINE = 'Connection lost! You are not connected to Internet';
export const ONLINE = 'Back to online';
export const NO_INTERNET = 'No Internet Connection';
export const TIME_OUT = 'Connection timed out. Please retry';
export const INTERNAL_SERVER_ERROR =
  "Couldn't connect to the server. Please try again";
export const INVALID_ID_ERROR = 'Invalid ID';
export const VERIFICATION_CODE = 'Please enter verification code';
export const SOMETHING_WRONG = 'Something went wrong, Please try again later';
export const NO_ACTION = "You can't perform this action";

export const ACCOUNT_ERROR_MESSAGES = {
  NAME_REQ: 'Please enter name',
  FIRST_NAME_REQ: 'Please enter first name',
  LAST_NAME_REQ: 'Please enter last name',
  MIN_NAME_REQ: 'Please enter atleast 3 characters',
  MOBILE_REQ: 'Please enter phone number',
  INVALID_MOBILE: 'Please enter a valid phone number',
  MIN_MOBILE: 'Please enter atleast 10 digit phone number',
  PASSWORD_REQ: 'Please enter password',
  INVALID_PASSWORD:
    'Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_PASSWORD: "Password can't start or end with a blank space",
  EMAIL_REQ: 'Please enter email address',
  //INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_EMAIL: 'Invalid email address.',
  ONLY_ALPHABET: 'Only alphabets are allowed',
  INVALID_EMAIL_PASS:'Invalid email  address or password.',
};

export const ACCOUNT_SUCCES_MESSAGES = {
  RESET_PASSWORD_SUCCESS:
    "Your password has been changed. Sign in again and you're good to go.",
};

export const PASSWORD_ERROR_MESSAGES = {
  OLD_PASSWORD_REQ: 'Please enter old password',
  INVALID_OLD_PASSWORD:
    'Old password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  NO_SPACE_OLD_PASSWORD: "Old password can't start or end with a blank space",
  NEW_PASSWORD_REQ: 'Please enter new password',
  // INVALID_NEW_PASSWORD:
  //   'New password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  INVALID_NEW_PASSWORD:'Invalid Password.',
  NO_SPACE_NEW_PASSWORD: "New password can't start or end with a blank space",
  C_PASSWORD_REQ: 'Please enter confirm new password',
  // INVALID_C_PASSWORD:
  //   'Confirm new password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  INVALID_C_PASSWORD:'Invalid Confirm password.',
  NO_SPACE_C_PASSWORD:
    "Confirm new password can't start or end with a blank space",
  CONFORM_PASSWORD_MATCH_ERR:
    'Password & Confirm Password do not match',
  OLD_NEW_PASSWORD_MATCH_ERR: "Old & New password can't be the same",
  WRONG_OLD_PASSWORD: 'Entered old password was incorrect',
};

export const LISTING_COMMON_MESSAGES = {
  ACTIVE_TITLE: 'Unblock Confirmation',
  ACTIVATE_TITLE: 'Active Confirmation',
  BLOCK_TITLE: 'Block Confirmation',
  INACTIVATE_TITLE: 'Inactive Confirmation',
  DELETE_TITLE: 'Delete Confirmation',
  ACTIVE_MSG: 'Are you sure you want to unblock?',
  ACTIVATE_MSG: 'Are you sure you want to activate?',
  BLOCK_MSG: 'Are you sure you want to block?',
  INACTIVATE_MSG: 'Are you sure you want to inactivate?',
  DELETE_MSG: 'Are you sure you want to delete?',
};

export const BANNER_ERROR_MESSAGES = {
  TITLE_REQ: 'Please enter banner title',
  HEADING_REQ: 'Please enter banner heading',
  IMG_REQ: 'Please select atleast one banner image',
  CONTENT_REQ: 'Please fill banner content',
};

export const SUB_ADMIN_ERROR_MESSAGES = {
  NAME_REQ: 'Please enter name',
  EMAIL_REQ: 'Please enter email address',
  INVALID_EMAIL: 'Please enter a valid email address',
  ROLE_REQ: 'Please select sub admin role',
};

export const NOTIFICATION_ERROR_MESSAGES = {
  TITLE_REQ: 'Please enter title',
  MESSAGE_REQ: 'Please enter message',
  PLATFORM_REQ: 'Please select platform',
  DATE_REQ: 'Please select date',
  TIME_REQ: 'Please select time',
};

export const MAX_IMG_SELECTION = 4;
export const FILE_EXIST = 'Selected image is already exist';
export const MAX_IMG_SELECTION_ERR = (count = MAX_IMG_SELECTION) =>
  `You can select upto ${count} images only`;
export const FUTURE_TIME = 'Please select future time';

export const FAQ_ERROR_MESSAGES = {
  QUESTION_REQ: 'Please enter question',
  ORDER_REQ: 'Please enter question display order',
  INVALID_ORDER: 'Question display order should be greater than Zero',
  ANSWER_REQ: 'Please enter answer',
};

export const S3_BUCKET_ERROR = 'Network Failure or Sync up your system clock';
export const BULK_EROR =
  'Please filter the athletes first on behalf of workout before performing the bulk operation';
export const ACTION_ERROR = (type) => `Please wait for ${type} action`;
export const TITLE_CONFIRMATION = (titleText) => `${titleText}`;
export const MSSG_CONFIRMATION = (MssgText) =>
  `Are you sure you want to ${MssgText}?`;

export const EDITOR_COMMON_MESSAGES = {
  CONTENT_REQ: 'Please fill some information about page',
  CMS_ACTION: (action: string) => `Content ${action} successfully`,
};

export const DATE_TYPES = {
  SHORT_TIME: 'h:mm a',
  MEDIUM_DATE: 'MMM d, yyyy',
  FULL_DATE: 'EE, MMM d, yyyy',
  VALIDITY_TIME: 'MMM d, y - hh:mm:ss a',
  DATE_WITH_TIME: 'MMM d, y - hh:mm a',
};

export const LIST_TYPE = {
  LISTING: 'LISTING',
  CSV: 'CSV',
};

export const USER_STATUS = [
  { name: 'Active', value: 2 },
  { name: 'Blocked', value: 1 },
];

export const STATUS = [
  { name: 'Active', value: 2 },
  { name: 'Inactive', value: 1 },
];

export const BANNER_TEMPLATE_TYPE = [
  { name: 'Before Login', value: 'BEFORE_LOGIN' },
  { name: 'After Login', value: 'AFTER_LOGIN' },
  { name: 'Both', value: 'BOTH' },
];

export const NOTIFICATION_PLATFORM = [
  { name: 'All', value: 4 },
  { name: 'Android', value: 1 },
  { name: 'iOS', value: 2 },
  { name: 'Web', value: 3 },
];

export const formatPlatform = (platform) => {
  switch (platform) {
    case NOTIFICATION_PLATFORM[0].value:
      return NOTIFICATION_PLATFORM[0].name;

    case NOTIFICATION_PLATFORM[1].value:
      return NOTIFICATION_PLATFORM[1].name;

    case NOTIFICATION_PLATFORM[2].value:
      return NOTIFICATION_PLATFORM[2].name;

    case NOTIFICATION_PLATFORM[3].value:
      return NOTIFICATION_PLATFORM[3].name;

    default:
      return '-';
  }
};

export const CONTENT_TYPES = {
  TERMS_AND_CONDITIONS: 'TERMS_AND_CONDITIONS',
  PRIVACY_POLICY: 'PRIVACY_POLICY',
  ABOUT_US: 'ABOUT_US',
  FAQ: 'FAQ',
};

export const NOTIFICATION_STATUS = {
  SENT: 'SENT',
  DRAFTED: 'DRAFTED',
  SCHEDULED: 'SCHEDULED',
};

export const NOTIFICATION_STATUS_LIST = [
  { name: 'Sent', value: NOTIFICATION_STATUS.SENT },
  { name: 'Drafted', value: NOTIFICATION_STATUS.DRAFTED },
  { name: 'Scheduled', value: NOTIFICATION_STATUS.SCHEDULED },
];

/**
 * @ROLE_MANAGEMENT_RELATED_STUFF
 */
export const MODULE_ID_OF = {
  BANNERS: '1',
  BROADCAST_NOTIFICATIONS: '2',
  CMS: '3',
};

export const MANAGE_TYPE_OF = {
  BANNERS: 'Banner Management',
  BROADCAST_NOTIFICATIONS: 'Notification Management',
  CMS: 'Content Management',
};

export const PERMISSIONS = [
  { module: MANAGE_TYPE_OF.BANNERS, moduleId: MODULE_ID_OF.BANNERS },
  {
    module: MANAGE_TYPE_OF.BROADCAST_NOTIFICATIONS,
    moduleId: MODULE_ID_OF.BROADCAST_NOTIFICATIONS,
  },
  { module: MANAGE_TYPE_OF.CMS, moduleId: MODULE_ID_OF.CMS },
];

// @Dashboard_button_text

export const BUTTON_TEXT = {
  EMPLOYEES: 'NEW USER',
  COMPANY: 'NEW COMPANY',
  OEM: 'ADD OEM',
};

export const TABLE_ERROR_MSG = {
  EMPLOYEES: 'No employee available!',
  COMPANY: 'No company available!',
  OEM: 'No OEM available!',
};
