import store from '../store'

/**
 * The request helper which reads the access_token from the redux state
 * and passes it in its HTTP request.
 *
 * @author Skylar Kong
 */

const getAuthHeaders = () => {
  const token = store.getState().oidc.user.access_token
  const headers = new Headers()

  headers.append('Accept', 'application/json')
  headers.append('Authorization', `Bearer ${token}`)

  return headers
}

export const apiRequest = (url, method = 'GET') => {

  const options = {
    method,
    getAuthHeaders
  }

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }))
}

export const apiPost = (url, body, method = 'POST') => {
  const headers = getAuthHeaders()
  headers.append('Content-Type', 'application/json')

  const options = {
    method,
    headers,
    body
  }

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }))
}

export const identityServerPost = (url, body, method = 'POST') => {  

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const options = {
    method,
    headers,   
    body
  }

  return fetch(url, options)
    .then(res => {
      if(res.status === 200) {        
        return res.json()}
    }).then(data => ({ data }))
    .catch(error => ({ error }))
}