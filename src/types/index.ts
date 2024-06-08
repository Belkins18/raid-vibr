export enum ENetworkMode {
  mainnet = 'mainnet',
  testnet = 'testnet',
}

export type TParams = {
  isMobile: boolean
  isTablet: boolean
  isTabletXL?: boolean
  isDesktop: boolean
}
