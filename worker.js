export default {
  async fetch(request) {
    const data = {
      Method: request.method,
      Url: request.url,
      IP: {
        IP: request.headers.get('CF-Connecting-IP'),
        Continent: request.cf.continent,
        Country: request.cf.country,
        IsEU: request.cf.isEUCountry,
        Region: request.cf.region,
        RegionCode: request.cf.regionCode,
        City: request.cf.city,
        Latitude: request.cf.latitude,
        Longitude: request.cf.longitude,
        PostalCode: request.cf.postalCode,
        MetroCode: request.cf.metroCode,
        Colo: request.cf.colo,
        ASN: request.cf.asn,
        ASOrganization: request.cf.asOrganization,
        Timezone: request.cf.timezone
      },
      Headers: {},
      Security: {}
    };

 // 遍历并存储每个 HTTP 头，排除以 cf- 开头的 HTTP 头
 request.headers.forEach((value, name) => {
  if (!name.toLowerCase().startsWith('cf-')) {
    data.Headers[name] = value;
  }
});

    // 遍历 request.cf 并存储所需对象的属性到 Security 中
    for (const key in request.cf) {
      if (
          key == 'clientTcpRtt' 
          || key == 'tlsCipher'
          || key == 'tlsVersion'
          || key == 'httpProtocol'
          || key == 'clientHandshake'
          || key == 'clientFinished'
          || key == 'serverHandshake'
          || key == 'serverFinished'
          || key == 'corporateProxy' 
          || key == 'verifiedBot' 
          || key == 'score'
          
          ) {
      if (typeof request.cf[key] === 'object') {
        for (const innerKey in request.cf[key]) {
          data.Security[innerKey] = request.cf[key][innerKey];
        }
      } else {
        data.Security[key] = request.cf[key];
      }
    }
    }

    var dataJson = JSON.stringify(data, null, 4);
    console.log(dataJson);

    return new Response(dataJson, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
  }
};
