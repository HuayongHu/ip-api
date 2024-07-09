# get-uesr-s-ip
利用Cloudflare的workers功能返回用户/访客的IP地址，形成一个可以使用的API。
返回的数据类型为Json格式，使用get方法进行访问即可。
您可以直接调用本站搭建的服务：https://ip.011102.xyz

以下是获得的json格式数据的示例：

{
    "Method": "GET",
    "Url": "https://ip.011102.xyz/",
    "IP": {
        "IP": "119.51.20.38",
        "Continent": "AS",
        "Country": "CN",
        "Region": "Jilin",
        "RegionCode": "JL",
        "City": "Changchun",
        "Latitude": "43.88000",
        "Longitude": "125.32470",
        "Colo": "LAX",
        "ASN": 4837,
        "ASOrganization": "China Unicom",
        "Timezone": "Asia/Shanghai"
    },
    "Headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, br",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "connection": "Keep-Alive",
        "dnt": "1",
        "host": "ip.011102.xyz",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "sec-gpc": "1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
        "x-forwarded-proto": "https",
        "x-real-ip": "119.51.20.38"
    },
    "Security": {
        "clientTcpRtt": 261,
        "tlsCipher": "AEAD-AES128-GCM-SHA256",
        "tlsVersion": "TLSv1.3",
        "httpProtocol": "HTTP/2"
    }
}
