var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)baidu\./.test(host)) return "DIRECT";
        if (/(?:^|\.)github\./.test(host)) return "DIRECT";
        if (/(?:^|\.)csdn\./.test(host)) return "DIRECT";
        if (/(?:^|\.)gitee\./.test(host)) return "DIRECT";
        if (/(?:^|\.)youdao\./.test(host)) return "DIRECT";
        if (/(?:^|\.)bing\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lanzous\./.test(host)) return "DIRECT";
        if (/greasyfork\.org$/.test(host)) return "DIRECT";
        if (/^github\./.test(host)) return "DIRECT";
        if (/^gitee\./.test(host)) return "DIRECT";
        if (/^im\.qq\./.test(host)) return "DIRECT";
        if (/^weixin\.qq\./.test(host)) return "DIRECT";
        if (/^wx\.qq\./.test(host)) return "DIRECT";
        if (/^mail\.163\./.test(host)) return "DIRECT";
        if (/^www\.qq\.com$/.test(host)) return "DIRECT";
        if (/^study\.163\./.test(host)) return "DIRECT";
        if (/^ke\.qq\./.test(host)) return "DIRECT";
        if (/^xydh\.fun\./.test(host)) return "DIRECT";
        if (/^qzone\.qq/.test(host)) return "DIRECT";
        if (/^mail\.qq\./.test(host)) return "DIRECT";
        if (/(?:^|\.)cnglobs\./.test(host)) return "DIRECT";
        if (/(?:^|\.)microsoft\./.test(host)) return "DIRECT";
        if (/(?:^|\.)tj\.122\.gov\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)xkctk\.jtys\.tj\.gov\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dingtalk\./.test(host)) return "DIRECT";
        if (/(?:^|\.)zhihui\./.test(host)) return "DIRECT";
        if (/(?:^|\.)icourse163\./.test(host)) return "DIRECT";
        if (/(?:^|\.)xuetangx\./.test(host)) return "DIRECT";
        if (/(?:^|\.)yuketang\./.test(host)) return "DIRECT";
        if (/(?:^|\.)tencent\./.test(host)) return "DIRECT";
        if (/(?:^|\.)intel\./.test(host)) return "DIRECT";
        if (/(?:^|\.)aliyun\./.test(host)) return "DIRECT";
        if (/(?:^|\.)ipaddress\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)githubusercontent\./.test(host)) return "DIRECT";
        return "+proxy";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY proxy.example.com:8080";
    }
});
