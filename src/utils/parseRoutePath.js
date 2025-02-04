export function parseRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParamsRegex, '(?<$1>[a-z0-9_]+)')

  const queryCaptureRegex = '(?<query>\\?(.*))?$'

  const pathRegex = new RegExp(`${params}${queryCaptureRegex}`)

  return pathRegex
}
