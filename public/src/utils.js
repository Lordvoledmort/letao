define(['jquery'],function($){
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
})