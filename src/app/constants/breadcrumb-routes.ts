/**
 * @BC === BREADCRUMB
 */

import * as route from 'src/app/constants/absolute-route';

/**
 * @PROFILE_MODULE_BREADCRUMB_ROUTE
 */
export const BC_PROFILE = [{ path: route.ABS_PROFILE, label: 'Profile' }];
export const BC_PROFILE_EDIT = [
  ...BC_PROFILE,
  { path: route.ABS_PROFILE_EDIT, label: 'Edit' },
];
export const BC_CHANGE_PASSWORD = [
  ...BC_PROFILE,
  { path: route.ABS_PROFILE_CHANGE_PASS, label: 'Change Password' },
];

/**
 * @BANNERS_MODULE_BREADCRUMB_ROUTE
 */
export const BC_BANNERS = [{ path: route.ABS_BANNERS, label: 'Banners' }];
export const BC_BANNERS_ADD = [
  ...BC_BANNERS,
  { path: route.ABS_BANNERS_ADD, label: 'Add' }
];
export const BC_BANNERS_EDIT = [
  ...BC_BANNERS,
  { path: route.ABS_BANNERS_EDIT, label: 'Edit' }
];
export const BC_BANNERS_DETAILS = [
  ...BC_BANNERS,
  { path: route.ABS_BANNERS_DETAILS, label: 'Details' },
];

/**
 * @NOTIFICATION_MODULE_BREADCRUMB_ROUTE
 */
export const BC_NOTIFICATION = [{ path: route.ABS_NOTIFICATION, label: 'Notifications' }];
export const BC_NOTIFICATION_ADD = [
  ...BC_NOTIFICATION,
  { path: route.ABS_NOTIFICATION_ADD, label: 'Add' }
];
export const BC_NOTIFICATION_EDIT = [
  ...BC_NOTIFICATION,
  { path: route.ABS_NOTIFICATION_EDIT, label: 'Edit' }
];
export const BC_NOTIFICATION_DETAILS = [
  ...BC_NOTIFICATION,
  { path: route.ABS_NOTIFICATION_DETAILS, label: 'Details' }
];


/**
 * @CMS_MODULE_BREADCRUMB_ROUTE
 */
export const BC_CMS = [{ path: route.ABS_CMS, label: 'Content Management' }];
export const BC_TERM_CONDTIONS = [
  ...BC_CMS,
  { path: route.ABS_TERM_CONDITIONS, label: 'Terms & Conditions' }
];
export const BC_PRIVACY_POLICY = [
  ...BC_CMS,
  { path: route.ABS_PRIVACY_POLICY, label: 'Privacy Policy' }
];
export const BC_ABOUT_US = [
  ...BC_CMS,
  { path: route.ABS_ABOUT_US, label: 'About Us' }
];
export const BC_FAQ = [
  ...BC_CMS,
  { path: route.ABS_FAQ, label: "FAQ's" }
];

/**
 * @ROLES_ACCESS_MODULE_BREADCRUMB_ROUTE
 */
export const BC_ROLES_ACCESS = [{ path: route.ABS_ROLES_ACCESS, label: 'Roles & Access Management' }];

export const BC_ROLES = [
  ...BC_ROLES_ACCESS,
  { path: route.ABS_ROLES, label: 'Roles' }
];
export const BC_ROLES_ADD = [
  ...BC_ROLES,
  { path: route.ABS_ROLES_ADD, label: 'Add' }
];
export const BC_ROLES_EDIT = [
  ...BC_ROLES,
  { path: route.ABS_ROLES_EDIT, label: 'Edit' }
];
export const BC_ROLES_DETAILS = [
  ...BC_ROLES,
  { path: route.ABS_ROLES_DETAILS, label: 'Details' },
];

export const BC_SUB_ADMINS = [
  ...BC_ROLES_ACCESS,
  { path: route.ABS_SUB_ADMINS, label: 'Sub Admins' }
];
export const BC_SUB_ADMIN_ADD = [
  ...BC_SUB_ADMINS,
  { path: route.ABS_SUB_ADMIN_ADD, label: 'Add' }
];
export const BC_SUB_ADMIN_EDIT = [
  ...BC_SUB_ADMINS,
  { path: route.ABS_SUB_ADMIN_EDIT, label: 'Edit' }
];
export const BC_SUB_ADMIN_DETAILS = [
  ...BC_SUB_ADMINS,
  { path: route.ABS_SUB_ADMIN_DETAILS, label: 'Details' },
];
