import { request } from "./request"

export function getDetailData(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: "/recommend",
    })
}

export class Goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.nowPrice = itemInfo.highNowPrice;
        this.services = shopInfo.services;
    }
}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.fans = shopInfo.cFans;
        this.goods = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
        this.services = shopInfo.services;
    }
}

export class ParamInfo {
    constructor(info, rule) {
        this.images = info.images ? info.images[0] : "";
        this.info = info;
        this.rule = rule;
    }
}