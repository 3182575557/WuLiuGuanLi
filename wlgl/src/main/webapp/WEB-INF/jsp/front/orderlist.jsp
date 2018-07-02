<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, order-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="${ctx}/css/pintuer.css">
<link rel="stylesheet" href="${ctx}/css/admin.css">
<script src="${ctx}/js/jquery.js"></script>
<script src="${ctx}/js/pintuer.js"></script>
</head>
<body>
<form method="post" action="" id="listform">
  <div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 订单信息</strong></div>
    <div class="padding border-bottom">
    </div>
   
    <table class="table table-hover text-center" id="mytable">
      <tr>
        <th  style="text-align:left; padding-left:20px;">订单ID</th>
        <th >下单时间</th>
        <th>收货人</th>
        <th >收货地址</th>
        <th >联系电话</th>
        <th >客户</th>
        <th>货物</th>
        <th>费用</th>
        <th >货物物流</th>
        <th >订单状态</th>
        <th >快递名称</th>
        <th >操作</th>
      </tr>
      <!-- <volist name="list" id="vo"> -->
     <tr>
      	
          	<td style="text-align:left; padding-left:20px;">${data.orderid}</td>
          	 <td style="text-align:center; padding-left:20px;"><fmt:formatDate value="${data.createtime}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
          	<td style="text-align:center; padding-left:20px;">${data.consignee}</td>
			<td style="text-align:center; padding-left:20px;">${data.receivingAddress}</td>
			<td style="text-align:center; padding-left:20px;">${data.orderPhone}</td>
          	<td style="text-align:left; padding-left:20px;">${data.orderUser}</td>
          	 <td style="text-align:center; padding-left:20px;">${data.goods}</td>
          	<td style="text-align:center; padding-left:20px;">${data.goodsCost}</td>
			<td style="text-align:center; padding-left:20px;">${data.goodsLogistics}</td>
			<td style="text-align:center; padding-left:20px;">${data.orderType}</td>
          	 <td style="text-align:center; padding-left:20px;">${data.express}</td>
			<td style="text-align:center; padding-left:20px;">
			<a class="button border-main" onclick="gotoindex()">返回首页</a>
			</td>
	  	</tr>	
    </table>
</form>
<script type="text/javascript">
function gotoindex(){
	location.href = "${ctx}/front/tofrontindex.html";	
}
</script>
</body>
</html>