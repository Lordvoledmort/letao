

define(['jquery'],function($) {
	 $('form').on('submit',function () {
            var _this = $(this);
            $.ajax({
                url:'/api/employee/employeeLogin',
                type:'post',
                data: _this.serialize(),
                success:function (info) {
                    if(info.error) {
                       return alert(info.message);
                    }

                    location.href = '/';
                }
            });

            return false;
        })
})