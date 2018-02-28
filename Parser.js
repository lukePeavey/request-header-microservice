module.exports = class Parser {
  static parseRequest(req) {
    return {
      ipaddress: Parser.getIP(req.connection.remoteAddress),
      language: Parser.getLanguage(req.headers["accept-language"]),
      software: Parser.getOS(req.headers["user-agent"])
    }
  }

  static getIP(remoteAddress) {
    let isV6 = remoteAddress.indexOf(':') >= 0;

    // We split the address every colon, then reverse the array
    // and grab the first item, which will be the actual IPv4 address
    return isV6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;
  }

  static getOS(userAgent) {
    let osInfo = userAgent.split(/[\(\)]/)[1]; // We grab the second field with [1]
    return osInfo.trim(); // Trim extra space
  }

  static getLanguage(acceptLanguage) {
     // We take the first language in the list and trim extra spaces
     return acceptLanguage.split(',')[0].trim();
  }
}
