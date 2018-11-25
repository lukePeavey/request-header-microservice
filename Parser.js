// note refactored to match fcc example project output...
// returns all accepted langauages and complete user agent string
module.exports = class Parser {
  static parseRequest(req) {
    return {
      ipaddress: Parser.getIP(req),
      language: req.headers['accept-language'],
      software: req.headers['user-agent'],
    }
  }

  static getIP(req) {
    const IP = (
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress
    ).split(',')[0]

    // If its V6, split the address every colon, then reverse the array
    // and grab the first item, which will be the actual IPv4 address
    const isV6 = IP.includes(':')
    return isV6 ? IP.split(':').reverse()[0] : IP
  }

  static getLanguage(acceptLanguage) {
    return acceptLanguage.split(',')[0].trim()
  }
}
