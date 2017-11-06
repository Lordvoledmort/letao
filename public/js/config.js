 


 	require.config({
        baseUrl:'/public',
        paths: {
            jquery:'assets/jquery/jquery.min',
            template:'assets/artTemplate/template-web',
            uploadify:'assets/uploadify/jquery.uploadify.min',
            nprogress:'assets/nprogress/nprogress',
            echarts:'assets/echarts/echarts.min',
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