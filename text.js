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

