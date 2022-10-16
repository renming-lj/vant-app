//导入刚才写好的axios二次封装的requests
import requests from "@/utils/request.js";

// 请求首页数据
export const reqCategoryList = ()=>{
    return requests({url:'/schoolList',method:'get'}
)}

// 修改数据
export const emitCategoryList = (query)=>{
    console.log(query.id,'query')
    return requests({url:`/emitSchoolList?id=${query.id}&name=${query.name}&palce=${query.palce}`,method:'get'}
    // return requests({url:'/emitSchoolList',method:'post',param:{...query}}
)}
