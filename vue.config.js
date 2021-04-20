module.exports = {
    devServer: {
        open: true,
        proxy:  {
            "/" : {
                 target: " http://localhost:5000",   // 需要跨域的目标url ,我这里是自己本地起的一个服务端口
                 changeOrigin: true,                 // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
                 ws:  true,
            }
        }
    }

}