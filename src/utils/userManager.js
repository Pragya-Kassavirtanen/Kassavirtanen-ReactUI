import { createUserManager } from 'redux-oidc'

/**
 * The user configuration file for the Google OpenID connect provider
 *
 * @author Skylar Kong
 */

const userManagerConfig = {
  client_id: '657675686025-hhvav6fgshs1ili8eugives0jvhvtts6.apps.googleusercontent.com',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/dashboard/callback`,
  response_type: 'token id_token',
  scope: 'email profile openid',
  authority: 'https://accounts.google.com',
  // In production, the silent renew path is /silentRenew.html or /dashboard/silentRenew.html depending on how the dist is configured
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/assets/silentRenew/silentRenew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

const userManager = createUserManager(userManagerConfig)
export default userManager


