<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>武夷双星茶厂物流管理系统前台</title>  
    <link rel="stylesheet" href="${ctx}/css/pintuer.css">
    <link rel="stylesheet" href="${ctx}/css/admin.css">
    <script src="${ctx}/js/jquery.js"></script>
    <script src="${ctx}/js/pintuer.js"></script>  
</head>
<body>

<div style="position:fixed;top:0px;left:20%;width:100%; ">
      <p style="font:bold 5em 'MicroSoft YaHei'; color:#1296db;">欢迎进入武夷双星茶厂物流管理系统前台</p>
       <div style="font:bold 3em 'MicroSoft YaHei';position:absolute; left: 22%" id="show"></div></h2>
  </div>

	<div style="padding:30px;margin-top:10%; margin-left:26%;"><input type="button" class="button bg-main text-big input-big" id="lookgoods" value="查询货物">
	<input style="width:600px; height:50px;" type="text" id="lookgoodstext" name="id" placeholder="在此输入货物编号(id),点击左边按钮进行查询" />
	</div>
	<div style="padding:30px; margin-left:26%;"><input type="button" class="button bg-main text-big input-big" id="lookexpress" value="查询物流">
	<input style="width:600px; height:50px;" type="text" id="lookexpresstext" name="orderid" placeholder="在此输入订单编号(id),点击左边按钮进行查询" />
	</div>
	<div style="padding:30px; margin-left:26%;"><input type="button" class="button bg-main text-big input-big" id="myorder" value="我的订单"></div>
	<div style="padding:30px; margin-left:26%;"><input type="button" class="button bg-main text-big input-big" id="changeuserinfo" value="账号修改"></div>
	<c:if test="${customer=='yes'}">
	<div style="padding:30px; margin-left:26%;;"><input type="button" class="button bg-main text-big input-big" id="addecustomer" value="完善信息"></div>
	</c:if>
	<c:if test="${customer=='no'}">
	<div style="padding:30px; margin-left:26%;;"><input type="button" class="button bg-main text-big input-big" id="changecustomer" value="信息修改"></div>
	</c:if>
	<div style="padding:30px; margin-left:26%;;"><input type="button" class="button bg-main text-big input-big" id="loginout" value="退出"></div>


<script type="text/javascript">
	//账号修改
	$(function(){
		$("#changeuserinfo").click(function(){
			location.href = "${ctx}/getUserBySession.html";
		});
	});
	//客户信息修改
	$(function(){
		$("#changecustomer").click(function(){
			location.href = "${ctx}/front/tochangecustomer.html";
		});
	});
	//货物查询
	$(function(){
		$("#lookgoods").click(function(){
			//alert($("#lookgoodstext").val());
			location.href = "${ctx}/getGoodsById.html?id="+$("#lookgoodstext").val();
		});
	});
	//物流查询
	$(function(){
		$("#lookexpress").click(function(){
			location.href = "${ctx}/getOrderById.html?orderid="+$("#lookexpresstext").val();
			
		});
	});
	//我的订单
	$(function(){
		$("#myorder").click(function(){
			location.href = "${ctx}/Order/getAllOrderByUserId.html";
		});
	});
	//退出
	$(function(){
		$("#loginout").click(function(){
			location.href = "${ctx}/userloginout.html";
		});
	});
	//添加当前登录号客户
	$(function(){
		$("#addecustomer").click(function(){
			location.href = "${ctx}/front/toaddcustomer.html";
		});
	});
	
</script>

 <script type="text/javascript">
     window.onload = function() {
      var show = document.getElementById("show");
      var time = new Date();
       // 程序计时的月从0开始取值后+1
       var m = time.getMonth() + 1;
       var t = time.getFullYear() + "-" + m + "-"
         + time.getDate() + " " + time.getHours() + ":"
         + time.getMinutes() + ":" + time.getSeconds();
       show.innerHTML = t;
      setInterval(function() {
       var time = new Date();
       // 程序计时的月从0开始取值后+1
       var m = time.getMonth() + 1;
       var t ="当前时间：" + time.getFullYear() + "-" + m + "-"
         + time.getDate() + " " + time.getHours() + ":"
         + time.getMinutes() + ":" + time.getSeconds();
       show.innerHTML = t;
      }, 1000);
     };
    </script>  


</body>
</html>