// 140 likes
// 喜欢的人  [] "no one likes this"
// ["Peter"] "Peter likes this"
// ["Jacob","Alex"] "Jacob and Alex like this"
// ["Max","John","Mark"]"Max,John and Mark like this"
// ["Alex","Jacob","Mark","Max"] "Alex Jacob and 2 other like this"

const likes= names=>{
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name},{name} and {name} like this',
        '{name},{name} and {n} other like this'
    ];
   
    let idx=Math.min(names.length,4);//哪一个模式
   
    //
    return templates[idx].replace(/{name}|{n}/g,function(val){
        return val ==='{name}'?names.shift():names.length;
        // console.log(val);
    });

    // switch(names.length){
    //     case 0:return "no one likes this";break;
    //     case 1:return names[0]+" likes this";break;
    //     case 2:return names[0]+" and "+names[1]+" like this";break;
    //     case 3:return names[0]+" , "+names[1]+" and "+names[2]+" like this";break;
    //     default:return names[0]+names[1]+"and 2 other like this";
    // }
    // 顺序思维 数学思维
    // 4 种可能 likes 的模式？
    // phone number 1种模式里的匹配 name name[i]


}
console.log(likes(["Jacob","Alex","Lisa","韩雨汐","谢妍"]));
