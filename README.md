

## 接口名称

### 1) 请求地址

>https://ip.011102.xyz/

### 2) 调用方式：HTTP get

### 3) 接口描述：

* 利用Cloudflare的workers功能返回用户/访客的IP地址，形成一个可以使用的API。

* 返回的数据类型为Json格式，使用get方法进行访问即可。

* 您可以直接调用本站搭建的服务，已经允许所有跨域：https://ip.011102.xyz

### 4) 请求参数:

无需参数

### 5) 请求返回结果:

```
{
    "Method": "GET",
    "Url": "https://ip.011102.xyz/",
    "IP": {
        "IP": "152.136.19.96",
        "Continent": "AS",
        "Country": "CN",
        "Region": "Beijing",
        "RegionCode": "BJ",
        "City": "Beijing",
        "Latitude": "39.91100",
        "Longitude": "116.39500",
        "Colo": "LHR",
        "ASN": 45090,
        "ASOrganization": "Tencent cloud computing",
        "Timezone": "Asia/Shanghai"
    },
    "Headers": {
        "accept-encoding": "gzip, br",
        "connection": "Keep-Alive",
        "content-type": "text/html",
        "host": "ip.011102.xyz",
        "user-agent": "Go-http-client/1.1",
        "x-forwarded-proto": "https",
        "x-real-ip": "152.136.19.96"
    },
    "Security": {
        "clientTcpRtt": 146,
        "tlsCipher": "AEAD-AES128-GCM-SHA256",
        "tlsVersion": "TLSv1.3",
        "httpProtocol": "HTTP/1.1"
    }
}
```
### 6) 演示地址:
https://ipinfo.011102.xyz/


