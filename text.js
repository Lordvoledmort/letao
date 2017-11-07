一般不在master分支下进行操作

创建一个新的分支 git checkout -b featrue-common

git status  git add -A

git commit -m '抽离公共页面'


git checkout developer

合并featrue-common 
git merge featrue-common

git push origin developer


git checkout master


----------------------------------------------------
git checkout -b featrue-product 创建一个分支 产品分支 并跳到这个分支

git merge developer 

抽取公共部分

1 创建一个目录 common 可以翻译成通用意思 创建一个header.html 再 建一个aside.html

		style.html script.html
	将aside部分提取出来 <?php include '路径' ?>

	一一提取 将后缀改成PHP

2 产品分支 

	good_list.html 引入require.js 和 config.js 再写一个goodlist.js
	会将api开头的地址链接到node里
	依赖模板引擎
	在config.js里引入模板引擎的路径
	先要测试能不能支持模块 有可能浏览器缓存没有更新template.js

	define(['jquery','template'],function() {
		var size = 2;
		var page = 1;


		$.ajax({
			url:'/api'
			type:'get', 
			data:{page:page,pageSize:size},
			success:function(info) {
				//总的数据条数
				var total = info.total
				var pageLen = Math.ceil(total/size)
				var html= template('tpl',info);
				var pagehtml = template('page',{
					pageLen:pageLen
				})
				$("goods").html(html);
				$('pagehtml').html(pagehtml)

			}
		})
	})

	将合并部分换完

	改变首页中商品的目录 goodlist.php 

	产品详情 产品地址是访问node  里面的数据

	在goodlist.php 里引入require(['src/goodlist.js'])

	下载art-template.js插件 模板

	在goodlist.php中将价格替换 需要进行遍历 {{each rows}} {{/each}} 将具体的名字都替换{{$value.oldPrice}} 等

<script type='text/template' id='tpl'>
	{{echo rows}}
	{{/echo}}
</script>

	在goodlist.php中写分页模板


添加商品 goodadd.php
在goodlist里面改变链接 可以跳转到添加商品的页面
点击保存将数据提交新建一个goodadd.js文件 
define(['jquery'],functino($) {
	$('form').on('submit', function() {
		var _this = $(this);
		$.ajax({
			url:'/api',
			type:'post',
			data:_this.serialize(),
			success:function(info) {
				console.log(info);
				
			}
		})
	})
})

CKeditor一个富文本编辑器的插件 需要向外暴露
shim:{
	exports:'ckedtior';
}
echarts 可视化图像 的插件
nprogress 顶部进度条的插件
require(['nprogress','jquery'],function(NProgress,$){
    	NProgress.start();
    	NProgress.done();
    	$(document).ajaxStart(function() {
    		NProgress.start()
    	}).ajaxStop(function() {
    		NProgress.done();
    	})

图像上传 使用一个插件  检测到没有define 

如果某个第三方的类库不支持AMD 通过shim可以实现类似模块的用法
shim : {
	//图片上传依赖jQuery
	//模块有何特点 依赖其他
	uploadify : {
		deps:['jquery']
	}

	通过exports 可以将非模块的方法或属性 公开出来
	(相当于标准模块中的return的作用)
	通过deps 可以依赖其他模块

	exports:

	deps:['']
}

jquery 一般使用的规律是
$(DOM).插件方法(对象格式)

$('#upfile').uploadify({
	buttonText = '',
	width:120,
	height:120,
	fileObjName::'pic1',上传名字
	swf:'',插件地址
	uploader:'',上传地址
	上传成功后返回的回调函数
	onUploadSuccess :function(file,data) {
		var res = JSON.parse(data);
	}

})
uploadify 使用flash 方法上传


git status  git add -A  git commit -m ''

git push lizhi featrue-product  git checkout master

git merge featrue-product
git checkout 



用户管理
处理公共部分
 
 template插件 要传两个参数
 template('ID',数据)

 前端渲染时遇到事件添加不上 可以使用使用事件委托
 给父级元素添加事件 在事件后面跟本身要加事件的类
 