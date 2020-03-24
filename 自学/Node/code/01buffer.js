/**
 * Buffer的基本操作
 * Buffer本质上就是字节数组
 * 1. 构造方法（类）
 * 2. 静态方法
 * 3. 实例方法
 */


//  实力化buf对象
// let buf = new Buffer(5);    不推荐了
//  let buf = Buffer.alloc(5);
//  console.log(buf)

// let buf = Buffer.from('hello','utf8') //字符转成16制
// console.log(buf)

// let buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65,0x72]);
// console.log(buf.toString()); // 把buf的实例对象转化为字符串

// ------------------------------------------------------------
// 静态方法
// console.log(Buffer.isEncoding('utf8'))
// console.log(Buffer.isEncoding('gbk'))

// 判断是否是buf类型
// let buf = Buffer.from('hello')
// console.log(Buffer.isBuffer(buf))
// console.log(Buffer.isBuffer({}))

// let buf = Buffer.from('中国') //  一个中文长度为3， axcii码就是1, 不同编码，长度不一样的
// console.log(Buffer.byteLength(buf))
// console.log(buf.toString())

// let buf1 = Buffer.alloc(3);
// let buf2 = Buffer.alloc(5);
// let buf3 = Buffer.concat([buf1,buf2])
// console.log(Buffer.byteLength(buf3))

// let buf1 = Buffer.from('tom');
// let buf2 = Buffer.from('jerry');
// let buf3 = Buffer.concat([buf1,buf2])
// // console.log(Buffer.byteLength(buf3))
// console.log(buf3.toString())

// ----------------------------------------------
// 实例方法
// let buf = Buffer.alloc(5);
// buf.write('hello',2,2)
// console.log(buf)


// let buf = Buffer.from('hello');
// let buf1 = buf.slice(1,3);
// console.log(buf === buf1)  //false
// console.log(buf1.toString())

// toJSON 方法不需要显式调用，当JSON.stringfy方法调用的时候会自动调用toJSON方法
// let buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5,0x6]);
// let buf  = Buffer.from('hello')  // 将字符转为10进制
// const json = JSON.stringify(buf)
// console.log(json)