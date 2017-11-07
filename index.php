<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    <?php include './common/style.html'; ?>
</head>
<body>
    
    <!-- 侧边栏 -->
    <?php include './common/aside.html'; ?>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <?php include './common/header.html'; ?>
            <!-- 个人资料 -->
            <div class="body dashboard">
                <div class="row survey">
                    <div class="col-xs-3">
                        <div class="cell money">
                            <i class="fa fa-money"></i>
                            <span>我的收入</span>
                            <h5>￥11.11</h5>
                        </div>
                    </div>
                    <div class="col-xs-3">
                        <div class="cell th">
                            <i class="fa fa-th"></i>
                            <span>课程数量</span>
                            <h5>12</h5>
                        </div>
                    </div>
                    <div class="col-xs-3">
                        <div class="cell user">
                            <i class="fa fa-user"></i>
                            <span>用户数量</span>
                            <h5>236</h5>
                        </div>
                    </div>
                    <div class="col-xs-3">
                        <div class="cell eye">
                            <i class="fa fa-eye"></i>
                            <span>浏览量</span>
                            <h5>22435</h5>
                        </div>
                    </div>
                </div>
                <div class="chart">
                    <div id="main" style="width: 600px;height:400px;"></div>
                </div>
            </div>
        </div>
    </div>
    <?php include './common/script.html'; ?>
    <script>
   

    require(['src/index']);

    

        // 基于准备好的dom，初始化echarts实例
        
    </script>
</body>
</html>