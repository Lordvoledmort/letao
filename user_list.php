<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>乐淘 - 后台管理</title>
    <?php include './common/style.html'; ?>
</hehad>
<body>
    
    <!-- 侧边栏 -->
    <?php include './common/aside.html'; ?>
    <!-- 主体 -->
    <div class="main">
        <div class="container-fluid">
            <!-- 头部 -->
            <?php include './common/header.html'; ?>
            <!-- 讲师列表 -->
            <div class="body user-list">
                <!-- 面包屑 -->
                <ol class="breadcrumb">
                    <li><a href="javascript:;">用户管理</a></li>
                    <li class="active">用户列表</li>
                </ol>
                <div class="page-title">
                    <a href="./user_add.html" class="btn btn-success btn-sm pull-right">添加用户</a>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form action="" class="form-inline">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm">
                                <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>用户名</th>
                                <th>手机号码</th>
                                <th>是否禁用</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <script type='text/template' id="list">
        
            {{each rows}}
            <tr>
                <td>{{$index+1}}</td>
                <td>{{$value.username}}</td>
                <td>{{$value.mobile}}</td>
                {{if($value.isDelete == 1)}}
                <td>是</td>
                {{else}}
                <td>否</td>
                {{/if}}

                <td data-id="{{$value.id}}" data-status="{{$value.isDelete}}"> 
                {{if($value.isDelete==1)}} 
                    <a href="javascript:;" class="btn btn-info btn-xs">启 用</a>
                {{else}}
                    <a href="javascript:;" class="btn btn-warning btn-xs">禁 用</a>
                {{/if}}
                </td>
            </tr>
            {{/each}}
    </script>
    <?php include './common/script.html'; ?>
    <script>
        require(['src/userlist'])
    </script>
</body>
</html>