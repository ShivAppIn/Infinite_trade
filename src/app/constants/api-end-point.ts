const ADMIN_BASE: string = 'admin';
const BANNER_BASE: string = 'banner';
const NOTIFICATION_BASE: string = 'notification';
const ROLE_BASE: string = 'role';
const SUB_ADMIN_BASE: string = 'subadmin';
const STATIC_CONTENT_BASE: string = 'contents';


/**
 * @ACCOUNT_RELATED_END_POINTS
 */
export const LOGIN_API = `${ADMIN_BASE}/login`;
export const LOGOUT_API = `${ADMIN_BASE}/logout`;
export const FORGOT_PASSWORD_API = `${ADMIN_BASE}/forgot-password`;
export const RESET_PASSWORD_API = `${ADMIN_BASE}/reset-password`;
export const CHANGE_PASSWORD_API = `${ADMIN_BASE}/change-password`;
export const VERIFY_OTP_API = `${ADMIN_BASE}/verify-otp`;
export const USER_INFO_API = `${ADMIN_BASE}/profile`;

/**
 * @DASHBOARD_RELATED_END_POINTS
 */
export const DASHBOARD_API = `${ADMIN_BASE}/dashboard`;


export const USER_LIST_API = `${ADMIN_BASE}/user-list`;

/**
 * @BANNERS_RELATED_END_POINTS
 */
export const BANNER_API = `${BANNER_BASE}`;
export const BANNER_BLOCK_UNBLOCK_API = `${BANNER_BASE}/block-unblock`;
export const BANNER_EXPORT_API = `${BANNER_BASE}/export`;

/**
 * @BROADCAST_NOTIFICATION_RELATED_END_POINTS
 */
export const NOTIFICATION_API = `${NOTIFICATION_BASE}`;
export const NOTIFICATION_ACTION_API = `send-notification`;

/**
 * @ROLES_ACCESS_RELATED_END_POINTS
 */
export const ROLES_API = `${ROLE_BASE}`;
export const ROLE_BLOCK_UNBLOCK_API = `${ROLE_BASE}/block-unblock`;
export const SUB_ADMINS_API = `${SUB_ADMIN_BASE}`;
export const SUB_ADMIN_BLOCK_UNBLOCK_API = `${SUB_ADMIN_BASE}/block-unblock`;

/**
 * @CMS_RELATED_END_POINTS
 */
export const CMS_API = (type) => `${STATIC_CONTENT_BASE}/${type}`;
export const UPDATE_CMS_API = `${STATIC_CONTENT_BASE}`;
export const FAQ_API = `${STATIC_CONTENT_BASE}/faq`;

