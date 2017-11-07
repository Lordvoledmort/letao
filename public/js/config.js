 


 	require.config({
        baseUrl:'/public',
        paths: {
            jquery:'assets/jquery/jquery.min',
            //artTemplate 插件
            template:'assets/artTemplate/template-web',
            //上传图片插件
            uploadify:'assets/uploadify/jquery.uploadify.min',
            //顶部进度条
            nprogress:'assets/nprogress/nprogress',
            //可视化图表
            echarts:'assets/echarts/echarts.min',
            //富文本编辑引入CKeditor就会有一个全局的CKEDITOR 可以调用 需要向外公开
            ckeditor:'assets/ckeditor/ckeditor'
        },
        shim: {
        	uploadify:{
        		deps:['jquery']
        	},
        	ckeditor: {
        		exports:'CKEDITOR'
        	}
        }
    });

    require(['nprogress','jquery'],function(NProgress,$){
    	NProgress.start();
    	NProgress.done();
    	$(document).ajaxStart(function() {
    		NProgress.start()
    	}).ajaxStop(function() {
    		NProgress.done();
    	})
    });