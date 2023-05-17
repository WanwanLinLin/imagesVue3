import request from '@/utils/request'
import request_dev from '@/utils/request_dev'

// 获取品牌信息
export const findBrand = (limit) => {
    return request('/home/brand', 'get', {limit})
}

export const findHot = (limit) => {
    return request('/home/hot', 'get', {limit})
}

// 获取轮播图
export const findBanner = () => {
    return request_dev('v1/home/banner', 'get')
}

// 新款角色
export const findNew = () => {
    return request_dev('v1/home/newCharacters', 'get')
}

// 人气场景
export const hotScene = () => {
    return request_dev('v1/home/hotScenes', 'get')
}


// 高分武器
export const strongWeapons = () => {
    return request_dev('v1/home/strongWeapons', 'get')
}

// 产品区块
export const findGoods = () => {
    return request('home/goods', 'get')
}

// 最新专题
export const findSpecial = () => {
    return request('home/special', 'get')
}
