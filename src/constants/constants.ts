const PRICE_INTERVAL = 2000; // 2,000ms === 2 second;

const SCREENS = {
  HOME: 'Home',
  DISCOVER: 'Discover',
  MARKET: 'Market',
  WALLET: 'Wallet',
  ACCOUNT: 'Account',
  PRODUCT: 'Product',
  WATCHLIST: 'Watchlist',
} as const;

const STACKS = {
  HOME: 'Home_STACK',
  DISCOVER: 'Discover_STACK',
  MARKET: 'Market_STACK',
  WALLET: 'Wallet_STACK',
  ACCOUNT: 'Account_STACK',
  PRODUCT: 'Product_STACK',
} as const;

const ICONS = {
  HOME: 'home',
  DISCOVER: 'script-text-outline',
  MARKET: 'chart-bar',
  WALLET: 'wallet-outline',
  ACCOUNT: 'account-outline',
  DECREASE: 'caretdown',
  INCREASE: 'caretup',
  STAR: 'staro',
  SEARCH: 'search1',
} as const;

const STORAGE_KEYS = {
  WATCHLIST_ITEMS: 'WATCHLIST_ITEMS',
} as const;

export { PRICE_INTERVAL, SCREENS, STACKS, ICONS, STORAGE_KEYS };
