import ajax from './ajax'
//获取广告列表
export const reqAdList = ()=>ajax('/api/index')
export const reqCarousel = ()=>ajax('/api/carousel')//获取轮播每日疯抢
export const reqSortList = ()=>ajax('/api/classify')//获取分类列表
export const reqBrandList = ()=>ajax('/api/brand')//获取品牌列表
export const reqBrands = ()=>ajax('/api/allbrand')//获取品牌列表
/*
用户名密码登陆
 */
export const nameLogin = ({name, pwd}) => ajax('/api/login_pwd', {name, pwd,captcha:'123'}, 'POST')
/*
手机号验证码登陆
 */
export const reqSmsLogin=({phone,code}) =>ajax('/api/login_sms',{phone,code},'POST')
/*发送短信验证码*/
export const reqSendCode=phone  =>ajax('/api/sendcode',{phone})
