var BCS  = require('../index.js');
var stream = require('stream');
var host = 'bcs.duapp.com';
var ak = 'your ak';
var sk = 'your sk';
var opt = {
  host:host,
  ak:ak,
  sk:sk
}
var client = new BCS(opt);
var bname = 'h1-bucket';
var bname1 = 'h2-bucket';
var data1 = 'im in h2-bucket';
var bname2 = 'h3-bucket';
var bolist = [{bname: bname, oname: '/h1-obj1', etag: '585c1b86b2f52250e6df299305204cc4'}, {bname: bname1, oname: '/h2-obj1', etag:'585c1b86b2f52250e6df299305204cc4' }];
var data = 'hello, BCS';

/*
client.putObj(bname, '/first', data, function(err, result){
  if(!err){
    console.log('put success');
    console.log('headers: ', result);
    client.getObj(bname, '/first', function(err, result){
      if(!err){
        console.log('get result: ', result);
      }
    });
  }else{
    console.log('putobj error: ', err);
  }
});

client.listBuckets(function(err, res){
  if(!err){
    console.log('buckets: ' + res);
  }else {
    console.log('listBuckets err: ', err);
  }
});

client.putObj(bname, '/thd', data, function(err){
  if(!err){
    console.log('put success');
    client.getObj(bname, '/thd', function(err, result){
      if(!err){
        console.log('get result: ', result);

        client.deleteObj(bname, '/thd', function(err){
          if(err){
            console.log('deleteObj error: ', err);
          }else {
            console.log('delele object success');
            client.getObj(bname, '/thd', function(err){
              if(err){
                console.log('getObj err: ', err);
              }
            })
          }
        });
      }
    });
  }else{
    console.log('putObj error: ', err);
  }
});


var option = {prefix: '/f'};
client.listObj(bname, option, function(err, result){
  if(err){
    console.log('listObj err: ', err);
  }else {
    console.log('result: ', result);
  }
});


client.putObj(bname1, '/h2-obj1', data1, function(err){
  if(err){
    console.log('putObj err: ', err);
  }else{
    client.copyObj(bname1, '/h2-obj1', bname, '/h1-obj1', function(err){
      if(err){
        console.log('copyObj err:', err);
      }else{
        client.listObj(bname, {}, function(err, result){
          if(err){
            console.log('listObj err: ', err);
          }else{
            console.log('all objs in h1-bucket: ', result );
          }
        })
      }
    });
  }
});


client.headObj(bname1, '/h2-obj1', function(err, result){
  if(err){
    console.log(err);
  }else{
    console.log('head result: ', result);
  }
});


client.putSuperfile(bname2, '/h3-superfile2', bolist, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('putSuperfile success');

    client.getObj(bname2, '/h3-superfile2', function(err, result){
      if(err){
        console.log('err: ', err);
      }else{
        console.log('get superfile result: ', result);
      }
    });

    client.listObj(bname2)
  }
});

*/
var option = {file: './meinv1.jpg'};

client.uploadFile(bname2, '/h2-pic1.jpg', option, function(err){
  if(err){
    console.log('uploadfile faild');
  }else{
    console.log('uploadFile success');
  }
});

/*
client.downloadFile(bname2, '/h2-pic.jpg', './downloadfile1.jpg', function(err){
  if(err){
    console.log(err);
  }else{
    console.log('download success');
  }
});

client.downloadFile(bname2, '/h2-pic.jpg', function(err, res){
  if(err){
    console.log(err);
    return;
  }
  var body_len = res.headers['content-length'];
  console.log(body_len);
  var opt = {
    file: res,
    size: +body_len
  }

  client.uploadFile(bname2, '/h2-pic2.jpg', opt, function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log('upload stream success');
  })
});

var acl = "{'statements':[{'user':['michael1'],'resource':['h3-bucket/*'],'action':['*'],'effect':'allow'}]}"
client.putACL(bname2, '/', acl, function(err){
  if(err){
    console.log('put acl err: ' + err);
  }else{
    client.getACL(bname2, '/', function(err, result){
      if(err){
        console.log('get acl error: ' + err);
      }else{
        console.log('acl: ' + result);
      }
    })
  }
});

var bname4 = 'h6-bucket';
function createBucket(){
  client.createBucket(bname4, function(err) {
    if(err){
      console.log(err);
      return;
    }
    console.log('create bucket success');
  })
}

function deleteBucket(){
  client.deleteBucket(bname4, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('delete bucket success');
  });
}


(function() {
  createBucket();
//  deleteBucket();
})()
*/
