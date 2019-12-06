const clone = parent => {
  // 判断类型
  const isType = (obj, type) => {
    if (typeof obj !== 'object') return false
    const typeString = Object.prototype.toString.call(obj)
    let flag;
    switch (type) {
      case 'Array':
        flag = typeString === "[object Array]"
        break;
      case 'Date':
        flag = typeString === "[object Date]"
        break;
      case 'RegExp':
        flag = typeString === "[object RegExp]"
        break;
      default: 
        flag = false
    }
    return flag
  }

  // 处理正则
  const getRegExp = re => {
    var flags = ''
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags
  }

  // 循环引用的数组
  const parents = [];
  const children = [];
  const _clone = parent => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent
    
    let child,proto;

    if (isType(parent, 'Array')) {
      child = []
    }else if (isType(parent, 'RegExp')) {
      child = new RegExp(parent.source,getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    }
  }
}