## 初始化
  sequelize init ( ./node_modules/.bin/sequelize init)
  npm i sequelize -S
  npm i sequelize-cli -D

  初始化完成之后生成的目录
  config: 配置目录
  migrations: 迁移文件 (数据库表结构)
  seeders: 种子文件 （生成测试数据）
  models: 模型文件 

## 创建数据库
- ./node_modules/.bin/sequelize db:create

# 构建数据库迁移结构
- ./node_modules/.bin/sequelize migration:create --name user

# 数据库结构
- user: 用户表
用来存放用户的基本信息 （用户名，密码等）

- user-profile: 用户的扩展表
用来存放用户的扩展信息 （性别，生日，个人简介，，，不常用的数据）

- login-log: 用户的登录日志
存放用户的登录日志（用户每一次登录时间，IP信息存放在这里

- categoty: 美食分类表
用来存放美食的分类（热菜，凉菜）

- cookbook: 美食信息
用来存放美食信息（标题，图片，等）

- step: 美食烹饪步骤
用来存放美食烹饪步骤，在每一个步骤中有一个字段与cookbook表的id进行关联

- comment: 评论表
用来存放用户对某个具体的cookbook的评论

- favorite: 收藏表
用来存放用户收藏的美食


# 生成表

./node_modules/.bin/sequelize db:migrate 生成表
./node_modules/.bin/sequelize db:migrate:undo:all 删除所有的表

# 创建种子文件
- seeders 文件夹下创建假数据
- ./node_modules/.bin/sequelize seed:generate --name user 创建种子文件

# 导入种子数字