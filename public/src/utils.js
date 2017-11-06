define(['jquery'],function($){
    //检测登录
      $.ajax({
            url:'/api/employee/checkRootLogin',
            type:'get',
            success:function (info) {
                // console.log(info);
                if(info.error) {
                    location.href = '/login.html';
                }
            }
        })

      $('.logout').on('click',function() {
            $.ajax({
                url:'/api/employee/employeeLogout',
                type:'get',
                success:function(info) {
                    if(info.success) {
                        location.href='/login.html';
                    }
                }
            })
      })
    //退出登录
})