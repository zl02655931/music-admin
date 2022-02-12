import axios from "axios";
import baseURL from "../api/baseURL";

const config = {
    baseURL: baseURL,
    timeout: 1000
};

// 创建实例
const instance = axios.create(config)


// 导出
export default instance
