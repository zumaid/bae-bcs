BCS 接口文档
============

服务简介
------

百度云存储（BCS）是百度推出的网络存储服务，旨在利用百度在分布式以及网络方面的优势为开发者提供便捷、简单、高效的存储服务。[点击这里了解详情](http://developer.baidu.com/wiki/index.php?title=docs/cplat/stor "BCS")

使用示例
------
 
    var http = require('http');
    var BCS = require('bae-bcs');
    var port = process.env.APP_PORT;
    var hostname = process.env.BAE_ENV_ADDR_BCS || 'bcs.duapp.com';
    var server = http.createServer(function(req, res) {
    	res.writeHead(200, {
    		'Content-Type': 'text/html'
    	});
        var ak = process.env.BAE_ENV_AK;
        var sk = process.env.BAE_ENV_SK;
        var options = {
            host: hostname,
            ak: ak,
            sk: sk
        }
        var client = new BCS(options);
        client.putObj(bname, '/foo', data, function(err){
            if(!err){
                client.getObj(bname, '/foo', function(err, result){
                    if(!err){
                        console.log('get result: ', result);
                    }
                });
            }else{
                console.log('putobj error: ', err);
            }
        });
    });
    server.listen(port);


接口列表
------

### BaeBCS(options)

 - 构造函数
 - options {Object}: BCS初始化选项
   - host {String}: BCS服务器地址
   - ak {String}: 用户API key
   - sk {String}: 用户Secret key

### listBuckets(callback)
 - 列出当前应用所有的在云存储上创建的Buckets
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### createBucket(bname, [acl,] callback)
 - 创建一个Bucket
 - bname {String}: 云存储中创建的Bucket名称
 - acl {String}: 描述指定bucket的ACL的字符串,详见[这里](http://developer.baidu.com/wiki/index.php?title=docs/cplat/stor/api/acl)
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### deleteBucket(bname, callback)
 - 删除一个Bucket
 - bname {String}: 云存储中创建的Bucket名称
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### headObj(bname, oname, callback)
 - 获取对象的meta信息
 - bname {String}: 云存储中创建的Bucket名称
 - oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### getObj(bname, oname, callback)
 - 从BCS获取对象
 - bname {String}: 云存储中创建的Bucket名称
 - oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### putObj(bname, oname, data, callback)
 - 上传数据到指定的对象
 - bname {String}: 云存储中创建的Bucket名称
 - oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
 - data {Buffer/String}: 上传到云存储中的数据，支持字符串类型和Buffer类型
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string，包含该对象的etag信息；调用失败，err返回的具体错误信息， result为空

### deleteObj(bname, oname, callback)
 - 删除一个对象
 - bname {String}: 云存储中创建的Bucket名称
 - oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### copyObj(src_bname, src_oname, dst_bname, dst_oname, callback)
 - 复制对象
 - src_bname {String}: 云存储中已创建的源Bucket
 - src_oname {String}: 要拷贝的源对象，必须以’/’开头，例如’/myobject’
 - dst_bname {String}: 云存储中已创建的目的Bucket
 - dst_oname {String}: 目的对象名称，必须以’/’开头
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### listObj(bname, options, callback)
 - 列举指定Bucket下的所有对象
 - bname {String}: 云存储中创建的Bucket名称
 - options {Object}: list选项
   - prefix {String}: 可选，若指定，则只返回符合prefix的object, 必须已’/’开头
   - start {Number}: 可选，list起始下标，默认为0
   - limit {Number}: 可选，设定返回结果集个数，默认为100
 - callback(err, result): 调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### putSuperfile(bname, oname, bolist, callback)
- 将已存储在BCS中的多个对象，合并成一个新的对象
- bname {String}: 云存储中创建的Bucket名称
- oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
- bolist {Array}：由{bname, oname, etag}元素组成的数组，表示将要被合并的对象，例如
[{bname: ‘foo’, oname: ‘/bar’, etag: 'foobar'}, {bname: ‘hello’, oname: ‘/world’, etag: 'helloword'}]。etag信息可在putObj的回调函数中获取，也可以通过headObj获取
- callback(err, result):
调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### uploadFile(bname, oname, options, callback)
- 上传文件到BCS
- bname {String}: 云存储中创建的Bucket名称
- oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
- options {Object}: 上传选项
  - file {String/Stream}: 待上传的文件名或者一个可读的Stream对象。
  - size {Number}: 待上传文件的大小。如果file是一个Stream，size的大小必须指定，并且要与实际上传的数据大小一致;如果file为文件名，size属性无效
- callback(err): 调用成功，err为空；调用失败，err返回的具体错误信息

### downloadFile(bname, oname, file, callback)
- 下载对象到一个文件或者到一个Stream
- bname {String}: 云存储中创建的Bucket名称
- oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
- file {String}: 可选，指定下载到本地的文件名。如果为空，callback(err, result)result为返回一个Stream对象。
- callback(err, result):
调用成功，err为空，result为返回结果（当file存在时，result为空；file缺省时，返回一个Stream对象）；调用失败，err返回的具体错误信息， result为空

### putACL(bname, oname, acl, callback)
- 设置对象的ACL, ACL的介绍详见[这里](http://developer.baidu.com/wiki/index.php?title=docs/cplat/stor/api/acl)
- bname {String}: 云存储中创建的Bucket名称
- oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
- acl {JSON String}: acl配置
- callback(err, result):
调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空

### getACL(bname, oname, callback)
- 获取对象的ACL
- bname {String}: 云存储中创建的Bucket名称
- oname {String}: 存储在Bucket中的对象名，必须以’/’开头，例如’/myobject’
- callback(err, result):
调用成功，err为空，result为返回结果，JSON格式的string；调用失败，err返回的具体错误信息， result为空


异常
----
所有接口均可能抛出异常

