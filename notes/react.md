http://help-dev.jlpay.io/api/docs,请求到了当前服务器上面的index.html文件
index.html文件中的资源引入是这样的
        <link rel="icon" href="/favicon.ico"/>
        <link href="/static/css/2.a1e3eec8.chunk.css" rel="stylesheet">
        <link href="/static/css/main.1b7e4b62.chunk.css" rel="stylesheet">
请求下载资源的时候报错，404
解决办法： 讲webpack的默认public_path由‘/’改为‘./’

