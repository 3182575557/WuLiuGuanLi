<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>武夷双星茶厂物流管理系统后台</title>  
    <link rel="stylesheet" href="${ctx}/css/pintuer.css">
    <link rel="stylesheet" href="${ctx}/css/admin.css">
    <script src="${ctx}/common/js/jquery/jquery.js"></script>
</head>
<body style="background-color:#f2f9fd;">
<div class="header bg-main">
  <div class="logo margin-big-left fadein-top">
    <h1><img src="${ctx}/images/adminlogo.jpg" class="radius-circle rotate-hover" height="50" />武夷双星茶厂物流管理系统后台</h1>
  </div>
  <div class="head-l"><a class="button button-little bg-green" href="${ctx}/toadminout.html"><span class="icon-home"></span> 退出</a> &nbsp;&nbsp; 
  
  </div>
<%--   <div class="head-l"><a class="button button-little bg-green" href="${ctx}/hello/article/indexpage.html" target="_blank"><span class="icon-home"></span> 前台首页</a> &nbsp;&nbsp; 
  </div> --%>
 
</div>

<div class="leftnav">
  <div class="leftnav-title"><strong><span class="icon-list"></span>菜单列表</strong></div>
  <h2><span class="icon-pencil-square-o"></span>用户管理</h2>
  <ul>
		<li>
			<a href="${ctx}/admin/user/touserlist.html" target="right">
			    用户列表</a>
		</li>
	</ul>
  <h2><span class="icon-pencil-square-o"></span>客户管理</h2>
	<ul>
		<li>
			<a href="${ctx}/admin/customer/tocustomerlist.html" target="right">
			    客户列表</a>
		</li>
	</ul>
	<h2><span class="icon-pencil-square-o"></span>货物管理</h2>
	<ul>
		<li>
			<a href="${ctx}/admin/goods/togoodslist.html" target="right">
			    货物列表</a>
		</li>
	</ul>

	<h2><span class="icon-pencil-square-o"></span>订单管理</h2>
	<ul>
		<li>
			<a href="${ctx}/admin/order/toorderlist.html" target="right">
			    订单列表</a>
		</li>
		<%-- <li>
			快递名称，订单状态，物流信息
		</li> --%>
	<%-- 	<li>
			<a href="${ctx}/Web/toAddWeb.html" target="right">
			    添加网站</a>
		</li> --%>
	</ul>	

</div>
<script type="text/javascript">
$(function(){
  $(".leftnav h2").click(function(){
  	  $(".leftnav ul").hide();
	  $(this).next().slideToggle(200);
	  $(".leftnav h2").removeClass("on");
	  $(this).toggleClass("on"); 
  })
  $(".leftnav ul li a").click(function(){
	    $("#a_leader_txt").text($(this).text());
  		$(".leftnav ul li a").removeClass("on");
		$(this).addClass("on");
  })
});
</script>

<div class="admin">

   <iframe scrolling="auto" rameborder="0" src="${ctx}/admin/welcome.html" name="right" width="100%" height="100%">

   </iframe> 
</div>
<div style="text-align:center;">
<p>制作人： 2014级计科2班   李阿捷</p>
</div>
</body>
</html>