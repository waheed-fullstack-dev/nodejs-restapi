import _ from 'lodash';

export const CURRENT_PCA =
  '/documents/DentalHQ-Platform-Client-Agreement-12-01-2021.pdf';
export const CURRENT_TIER_PCA =
  '/documents/DentalHQ-Platform-Customer-Agreement_Aug-2022.pdf';

export const USER_ORIGIN_OPTIONS = [
  'external',
  'internal',
  'dentalhq',
  'sm_business',
  'transferred',
  'transferred_notemailed',
];

export const ADULT_MEMBERSHIP_ITEMS_DEFAULTS = [
  {
    code: '1110',
  },
  {
    code: '0150',
  },
  {
    code: '0120',
  },
  {
    code: '4910',
  },
  {
    code: '1208',
  },
  {
    code: '0274',
  },
  {
    code: '0272',
  },
  {
    code: '0210',
  },
  {
    code: '0330',
  },
  {
    code: '0140',
  },
  {
    code: '0220',
  },
];

export const CHILDREN_MEMBERSHIP_ITEMS_DEFAULTS = [
  {
    code: '0150',
  },
  {
    code: '1120',
  },
  {
    code: '0120',
  },
  {
    code: '4910',
  },
  {
    code: '1208',
  },
  {
    code: '0274',
  },
  {
    code: '0272',
  },
  {
    code: '0210',
  },
  {
    code: '0330',
  },
  {
    code: '0140',
  },
  {
    code: '0220',
  },
];

export const DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export const SEX_TYPES = {
  M: 'Male',
  F: 'Female',
};

export const PREFERRED_CONTACT_METHODS = {
  office: 'I will contact the office',
  phone: 'Phone',
  email: 'Email',
};

export const USER_TYPES = {
  super_admin: 'Super Admin', // DHQ only
  almost_super: 'Almost Super', // DHQ only
  admin: 'Admin', // DHQ Manager only, but don't use this one its doesn't work properly, default to 'admin'
  client: 'Client', // patients
  manager: 'DentalHQ Other', 
  dentist: 'Dentist', // Dental super user, multiple offices
  office_admin: 'Office Admin', // Dental super user, single office
  dentist_standard: 'Dentist Manager', // Dental user, limited permissions, single office
  sm_business: 'sm_business',
  association: 'Association',
  association_standard: 'Association Standard',
  affiliate: 'Affiliate',
  office_admin_temp: 'Temporary Office Admin',
};

export const STRIPE_ACCOUNT_TYPES = ['Custom', 'Standard', 'Legacy+', 'Legacy'];

export const PHONE_TYPES = ['landline', 'mobile', 'voip'];

export const DHQ_ACCOUNT_TYPES = ['Incomplete', 'Active', 'Locked', 'Canceled','Abandonded'];

export const ADDITIONAL_USER_TYPES_1 = {
  manager: 'Manager',
};

export const MEMBER_RELATIONSHIP_TYPES = {
  partner: 'Spouse',
  son: 'Son',
  daughter: 'Daughter',
  child: 'Child',
  other: 'Other',
  myself: 'Myself',
};

export const CONTACT_SUPPORT_EMAIL = 'support@dentalhq.com';
export const CONTACT_SUCCESS_EMAIL = 'success@dentalhq.com';
export const SALESFORCE_CASE_EMAIL =
  'support@1k3k3mzbcx4358n8gzk0uvtti330kgu7p43xv7omi1p6q8jigs.4w-7qcfwuao.na139.case.salesforce.com';

export const EMAIL_SUBJECTS = {
  client: {
    welcome: 'Dental Membership',
    membershipPriceUpdate: 'Membership price update',
    subscriptionChargeFailed: 'Uh oh - recurring payment issue',
    subscriptionCancellation: 'Membership Cancellation',
    thirtyDayOldPatientNotification: 'Thanks for your support!',
    annualPlanRenewNotification: 'Annual Plan Renewal',
  },
  dentist: {
    welcome: 'Welcome to the Dental Marketplace!',
    welcome_homepage: 'Welcome to DentalHQ',
    activation_required: 'Activate Your Account',
    invite_patient: 'Invitation to join',
    new_patient: 'New Member Notification',
    new_cash_member: 'New Member Notification (Cash/Check)',
    new_review: 'You have a new review',
    subscriptionChargeFailed: "Member's Recurring Payment Failure",
    subscriptionChargeDelinquent:
      "Member's account is now Inactive due to delinquency",
  },
  activation_complete: 'Your DentalHQ account has been activated',
  contact_support: 'A New DentalHQ.com Contact Form Message',
  password_reset: 'Password Reset Request',
  terms_and_conditions_update: 'Terms and Conditions Updated',
  invite: {
    patient: 'Membership Club Invitation',
    dentist: 'Welcome to DentalHQ',
  },
};

export const SUBSCRIPTION_STATES = [
  'trialing',
  'active',
  'inactive',
  'past_due',
  'delinquent',
  'canceled',
  'unpaid',
  'expired',
  'cancellation_requested',
  'active_cash',
  'pending_cash',
  'terminated',
  'termination_initiated',
  'disputed',
  'active_transferred',
  'inactive_transferred',
];

export const SUBSCRIPTION_STATES_LOOKUP = _.keyBy(
  SUBSCRIPTION_STATES,
  (state) => state
);

export const SUBSCRIPTION_TYPES = ['month', 'year', 'custom'];

export const SUBSCRIPTION_TYPES_LOOKUP = {
  month: SUBSCRIPTION_TYPES[0],
  year: SUBSCRIPTION_TYPES[1],
};

export const SUBSCRIPTION_AGE_GROUPS = ['adult', 'child'];

export const SUBSCRIPTION_AGE_GROUPS_LOOKUP = {
  adult: SUBSCRIPTION_AGE_GROUPS[0],
  child: SUBSCRIPTION_AGE_GROUPS[1],
};

export const RECOMMENDED_DISCOUNT = 25;

export default {
  SEX_TYPES,
  PREFERRED_CONTACT_METHODS,
  USER_TYPES,
  EMAIL_SUBJECTS,
};

export const US_STATES = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

export const EDIT_USER_BY_ADMIN = [
  'firstName',
  'middleName',
  'lastName',
  'email',
  'phoneNumber',
];

/**
 * Pricing Codes related to calculating the full cost of a membership
 */
export const CODES_FOR_CALC_FULL_COST = [
  '1110',
  '0120',
  '0274',
  '0330',
  '0220',
  '0140',
];

export const AUTHORIZE_HOOK_EVENTS = {
  REFUND_CREATED: 'net.authorize.payment.refund.created',
  SUBSCRIPTION_SUSPENDED: 'net.authorize.customer.subscription.suspended',
  SUBSCRIPTION_TERMINATED: 'net.authorize.customer.subscription.terminated',
  SUBSCRIPTION_CANCELLED: 'net.authorize.customer.subscription.cancelled',
};

export const PENALITY_TYPES = ['cancellation', 'reenrollment'];

export const SMALL_BUSINESS_USER_ROLES = ['admin', 'standard'];

export const STRIPE_CENT_CHARGE = 0.3;

//ACH fee added at 1.5% on 6/1/22 per Hoss
// this includes both stripe fee and plaid fee
export const ACH_FEE = 1.5;

export const DISPUTE_TYPES = [
  'credit_not_processed',
  'duplicate',
  'fraudulent',
  'general',
  'product_not_received',
  'product_unacceptable',
  'subscription_cancelled',
  'unrecognized',
];

export const DISPUTE_STATUS = [
  'warning_needs_response',
  'warning_under_review',
  'warning_closed',
  'needs_reponse',
  'under_review',
  'charge_refunded',
  'won',
  'lost',
];

export const ENROLLMENT_VERSIONS = [
  {
    colorOne: null,
    colorTwo: null,
    colorOneHex: null,
    colorTwoHex: null,
    heroImage: null,
    imageOne: null,
    imageTwo: null,
    imageThree: null,
  },
  {
    colorOne: 'blue',
    colorTwo: 'green',
    colorOneHex: '#00A1DF',
    colorTwoHex: '#A1DF00',
    heroImage: 'https://s3.amazonaws.com/market_materials/d1-hero.jpg',
    imageOne: 'https://s3.amazonaws.com/market_materials/d1-123-1.jpg',
    imageTwo: 'https://s3.amazonaws.com/market_materials/d1-123-2.jpg',
    imageThree: 'https://s3.amazonaws.com/market_materials/d1-123-3.jpg',
  },
  {
    colorOne: 'dkblue',
    colorTwo: 'orange',
    colorOneHex: '#2E445E',
    colorTwoHex: '#E69C31',
    heroImage: 'https://s3.amazonaws.com/market_materials/d2-hero.jpg',
    imageOne: 'https://s3.amazonaws.com/market_materials/d2-123-1.jpg',
    imageTwo: 'https://s3.amazonaws.com/market_materials/d2-123-2.jpg',
    imageThree: 'https://s3.amazonaws.com/market_materials/d2-123-3.jpg',
  },
  {
    colorOne: 'purple',
    colorTwo: 'gray',
    colorOneHex: '#905E8E',
    colorTwoHex: '#9D9FA3',
    heroImage: 'https://s3.amazonaws.com/market_materials/d3-hero.jpg',
    imageOne: 'https://s3.amazonaws.com/market_materials/d3-123-1.jpg',
    imageTwo: 'https://s3.amazonaws.com/market_materials/d3-123-2.jpg',
    imageThree: 'https://s3.amazonaws.com/market_materials/d3-123-3.jpg',
  },
];

export const DECLINE_CODES = {
  expired_card: {
    dhqMessage: 'Card has expired. (code: expired_card)',
    transactionDescription: 'Expired Card',
  },
  insufficient_funds: {
    dhqMessage: 'Card has insufficient funds. (code: insufficient_funds)',
    transactionDescription: 'Insufficient Funds',
  },
  withdrawal_count_limit_exceeded: {
    dhqMessage:
      'Balance or credit limit exceeded. (code: withdrawal_count_limit_exceeded)',
    transactionDescription: 'Contact Bank',
  },
  call_issuer: {
    dhqMessage: 'Have cardmember contact card issuer. (code: call_issuer)',
    transactionDescription: 'Contact Bank',
  },
  card_not_supported: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: card_not_supported)',
    transactionDescription: 'Contact Bank',
  },
  card_velocity_exceeded: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: card_velocity_exceeded)',
    transactionDescription: 'Contact Bank',
  },
  currency_not_supported: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: currency_not_supported)',
    transactionDescription: 'Contact Bank',
  },
  do_not_honor: {
    dhqMessage: 'Have cardmember contact card issuer. (code: do_not_honor)',
    transactionDescription: 'Contact Bank',
  },
  do_not_try_again: {
    dhqMessage: 'Have cardmember contact card issuer. (code: do_not_try_again)',
    transactionDescription: 'Contact Bank',
  },
  duplicate_transaction: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: duplicate_transaction)',
    transactionDescription: 'Duplicate Transaction',
  },
  fraudulent: {
    dhqMessage: 'Have cardmember contact card issuer. (code: fraudulent)',
    transactionDescription: 'Contact Bank',
  },
  generic_decline: {
    dhqMessage: 'Have cardmember contact card issuer. (code: generic_decline)',
    transactionDescription: 'Contact Bank',
  },
  invalid_account: {
    dhqMessage: 'Have cardmember contact card issuer. (code: invalid_account)',
    transactionDescription: 'Invalid Account',
  },
  invalid_amount: {
    dhqMessage: 'Have cardmember contact card issuer. (code: invalid_amount)',
    transactionDescription: 'Invalid Amount',
  },
  lost_card: {
    dhqMessage: 'Have cardmember contact card issuer. (code: lost_card)',
    transactionDescription: 'Lost Card',
  },
  merchant_blacklist: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: merchant_blacklist)',
    transactionDescription: 'Contact Bank',
  },
  new_account_information_available: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: new_account_information_available)',
    transactionDescription: 'Contact Bank',
  },
  no_action_taken: {
    dhqMessage: 'Have cardmember contact card issuer. (code: no_action_taken)',
    transactionDescription: 'Contact Bank',
  },
  not_permitted: {
    dhqMessage: 'Have cardmember contact card issuer. (code: not_permitted)',
    transactionDescription: 'Contact Bank',
  },
  pickup_card: {
    dhqMessage: 'Have cardmember contact card issuer. (code: pickup_card)',
    transactionDescription: 'Contact Bank',
  },
  pin_try_exceeded: {
    dhqMessage: 'Have cardmember contact card issuer. (code: pin_try_exceeded)',
    transactionDescription: 'Contact Bank',
  },
  restricted_card: {
    dhqMessage: 'Have cardmember contact card issuer. (code: restricted_card)',
    transactionDescription: 'Contact Bank',
  },
  revocation_of_all_authorizations: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: revocation_of_all_authorizations)',
    transactionDescription: 'Contact Bank',
  },
  revocation_of_authorization: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: revocation_of_authorization)',
    transactionDescription: 'Contact Bank',
  },
  security_violation: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: security_violation)',
    transactionDescription: 'Contact Bank',
  },
  service_not_allowed: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: service_not_allowed)',
    transactionDescription: 'Contact Bank',
  },
  stolen_card: {
    dhqMessage: 'Have cardmember contact card issuer. (code: stolen_card)',
    transactionDescription: 'Contact Bank',
  },
  stop_payment_order: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: stop_payment_order)',
    transactionDescription: 'Contact Bank',
  },
  testmode_decline: {
    dhqMessage: 'Have cardmember contact card issuer. (code: testmode_decline)',
    transactionDescription: 'Contact Bank',
  },
  transaction_not_allowed: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: transaction_not_allowed)',
    transactionDescription: 'Contact Bank',
  },
  offline_pin_required: {
    dhqMessage: 'Swipe card and enter PIN. (code: offline_pin_required)',
    transactionDescription: 'Incorrect PIN',
  },
  online_or_offline_pin_required: {
    dhqMessage:
      'Swipe card and enter PIN. (code: online_or_offline_pin_required)',
    transactionDescription: 'Incorrect PIN',
  },
  incorrect_number: {
    dhqMessage: 'The card number is incorrect. (code: incorrect_number)',
    transactionDescription: 'Incorrect Number',
  },
  invalid_number: {
    dhqMessage: 'The card number is incorrect. (code: invalid_number)',
    transactionDescription: 'Invalid Number',
  },
  incorrect_cvc: {
    dhqMessage: 'The CVC number is incorrect. (code: incorrect_cvc)',
    transactionDescription: 'Incorrect CVC',
  },
  invalid_cvc: {
    dhqMessage: 'The CVC number is incorrect. (code: invalid_cvc)',
    transactionDescription: 'Invalid CVC',
  },
  invalid_expiry_month: {
    dhqMessage:
      'The expiration month is incorrect. (code: invalid_expiry_month)',
    transactionDescription: 'Invalid Exp. Month',
  },
  invalid_expiry_year: {
    dhqMessage: 'The expiration year is incorrect. (code: invalid_expiry_year)',
    transactionDescription: 'Invalid Exp. Year',
  },
  invalid_pin: {
    dhqMessage: 'The PIN number is incorrect. (code: invalid_pin)',
    transactionDescription: 'Invalid Pin',
  },
  incorrect_pin: {
    dhqMessage: 'The PIN number is incorrect.(code: incorrect_pin)',
    transactionDescription: 'Incorrect PIN',
  },
  incorrect_zip: {
    dhqMessage: 'The ZIP code is incorrect. (code: incorrect_zip)',
    transactionDescription: 'Incorrect ZIP',
  },
  approve_with_id: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: approve_with_id)',
    transactionDescription: 'Retry Transaction',
  },
  authentication_required: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: authentication_required)',
    transactionDescription: 'Retry Transaction',
  },
  issuer_not_available: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: issuer_not_available)',
    transactionDescription: 'Retry Transaction',
  },
  processing_error: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: processing_error)',
    transactionDescription: 'Retry Transaction',
  },
  reenter_transaction: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: reenter_transaction)',
    transactionDescription: 'Retry Transaction',
  },
  try_again_later: {
    dhqMessage:
      'Try again and contact card issuer if problem persists. (code: try_again_later)',
    transactionDescription: 'Retry Transaction',
  },
  lock_timeout: {
    dhqMessage:
      'Stripe Connection Error. Wait several minutes before reattempting this action.',
    transactionDescription: 'Stripe Error',
  },
  missing_default_card: {
    dhqMessage: 'For security purposes, please re-enter payment information.',
    transactionDescription: 'Stripe Error',
  },
  token_already_used: {
    dhqMessage:
      'You cannot use a Stripe token more than once. For security purposes, please re-enter payment information.',
    transactionDescription: 'Stripe Error',
  },
  subscription_payment_intent_requires_action: {
    dhqMessage:
      'Have cardmember contact card issuer. (code: subscription_payment_intent_requires_action)',
    transactionDescription: 'Contact Bank',
  },
  resource_missing: {
    dhqMessage:
      'Internal Server Error. Please Contact DentalHQ Support for assistance',
    transactionDescription: 'Contact DentalHQ',
  },
  insufficient_capabilities_for_transfer: {
    dhqMessage:
      'Stripe Account Issue. Please Contact DentalHQ Support for assistance',
    transactionDescription: 'Contact DentalHQ',
  },
  parameter_invalid_empty: {
    dhqMessage:
      'Missing Plan Error. Please Contact DentalHQ Support for assistance',
    transactionDescription: 'Contact DentalHQ',
  },
  missing: {
    dhqMessage:
      'Cannot charge a customer that has no active card. Please Contact DentalHQ Support for assistance',
    transactionDescription: 'Contact DentalHQ',
  },
};

export const TIER_LEVELS = ['legacy', 'free', 'lite', 'standard', 'premium'];

export const MONTH_NAMES = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];


export const FULL_MONTH_NAMES = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export const PLAN_PRESETS = {
  1: [
    {
      name: 'Adult Wellness Plan',
      spanishName: null,
      description:
        '1 routine cleaning every 6 months\nRegular exam with cleaning\nOral cancer screening with cleaning\n1 set of routine X-rays per year\n1 emergency exam with X-ray per year\nUp to __% off additional treatment',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'month',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 0,
      presetType: 'general_adult',
    },
    {
      name: 'Child Wellness Plan',
      spanishName: null,
      description:
        '1 routine cleaning every 6 months\n' +
        'Fluoride treatment with cleaning\n' +
        'Regular exam with cleaning\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'child',
      type: 'month',
      discount: 0,
      price: 0,
      maxAge: 13,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 1,
      presetType: 'general_child',
    },
    {
      name: 'Perio Maintenance Plan',
      spanishName: null,
      description:
        '1 periodontal maintenance every 3 months\n' +
        'Fluoride treatment with cleaning\n' +
        '2 regular exams per year\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 2,
      presetType: 'general_perio',
    },
  ],
  2: [
    {
      name: 'Toddler Plan',
      spanishName: null,
      description:
        '1 routine cleaning every 6 months\n' +
        'Fluoride treatment with cleaning\n' +
        'Regular exam with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'child',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: 3,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 0,
      presetType: 'pediatric_toddler',
    },
    {
      name: 'Child Plan',
      spanishName: null,
      description:
        '1 routine cleaning every 6 months\n' +
        'Fluoride treatment with cleaning\n' +
        'Regular exam with cleaning\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'child',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: 12,
      minAge: 4,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 1,
      presetType: 'pediatric_child',
    },
    {
      name: 'Teen Plan',
      spanishName: null,
      description:
        '1 routine cleaning every 6 months\n' +
        'Fluoride treatment with cleaning\n' +
        'Regular exam with cleaning\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: 13,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 2,
      presetType: 'pediatric_teen',
    },
  ],
  3: [
    {
      name: 'Perio 1',
      spanishName: null,
      description:
        '1 periodontal maintenance per year\n' +
        'Fluoride treatment with cleaning\n' +
        '1 regular exam per year\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 0,
      presetType: 'periodontic_perio1',
    },
    {
      name: 'Perio 2',
      spanishName: null,
      description:
        '1 periodontal maintenance every 6 months\n' +
        'Fluoride treatment with cleaning\n' +
        '2 regular exams per year\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 1,
      presetType: 'periodontic_perio2',
    },
    {
      name: 'Perio 4',
      spanishName: null,
      description:
        '1 periodontal maintenance every 3 months\n' +
        'Fluoride treatment with cleaning\n' +
        '2 regular exams per year\n' +
        'Oral cancer screening with cleaning\n' +
        '1 set of routine X-rays per year\n' +
        '1 emergency exam with X-ray per year\n' +
        'Up to __% off additional treatment\n',
      spanishDescription: null,
      subscription_age_group: 'adult',
      type: 'custom',
      discount: 0,
      price: 0,
      maxAge: null,
      minAge: null,
      showOnEnrollment: true,
      active: false,
      isDeleted: false,
      sortOrder: 2,
      presetType: 'periodontic_perio4',
    },
  ],
};

export const PREFERRED_START_PAGE_OPTIONS = {
  members: '/account/members',
  dashboard: '/account/dashboard',
  reports: '/account/reports',
};

export const PRETTY_INVOICE_ITEMS = {
  technology_fee_monthly: 'DHQ Platform Fee',
  technology_fee_annual: 'DHQ Platform Fee',
  membership_fee: 'DHQ Membership Fee',
  in_office_membership_fee: 'DHQ In-Office Membership Fee',
  upgrade_credit: 'One-time Upgrade Credit',
  merchant_fee: 'Merchant Fee',
  other: 'Other Fees',
  refund: 'Refund',
  adjustment: 'Adjustment',
  rollover: 'Billing Rollover'
};
