import request from '@/utils/request'
import request_dev from '@/utils/request_dev'

// 获取品牌信息
export const findBrand = (limit) => {
    return request('/home/brand', 'get', {limit})
}

// 获取轮播图
export const findBanner = () => {
    return request_dev('v1/home/banner', 'get')
}

// 热门角色
export const findNew = () => {
    return request('home/new', 'get')
}

// 人气场景
export const findHot = () => {
    return request('home/hot', 'get')
}

// 产品区块
export const findGoods = () => {
    return request('home/goods', 'get')
}

// 最新专题
export const findSpecial = () => {
    return request('home/special', 'get')
}
