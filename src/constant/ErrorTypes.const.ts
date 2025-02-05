export const ErrorGameTypes = {
  DISABLED_SYSTEM_GAMBLING: 'disabled_system_gambling',
  UNINITIALIZED_KYC: 'uninitialized_kyc',
  PENDING_KYC: 'pending_kyc',
  GAME_MAINTENANCE: 'game_maintenance',
  INVALID_GAME: 'invalid_game',
  DECLINED_KYC: 'declined_kyc'
};

export const ErrorAccountTypes = {
  EXCLUDED_ACCOUNT: 'excluded_account',
  DEACTIVATED_ACCOUNT: 'deactivated_account',
  BANNED_ACCOUNT: 'banned_account',
  KICKED_ACCOUNT: 'kicked_account'
};

export const ErrorCodeTypes = {
  system: {
    canceled: -1,
    networkUnavailable: -2,
    systemError: -3
  }
};
