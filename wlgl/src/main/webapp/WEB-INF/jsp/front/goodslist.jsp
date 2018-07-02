<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, goods-scalable=no" />
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
    <div class="panel-head"><strong class="icon-reorder"> 货物信息</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
    <div class="padding border-bottom">
      <ul class="search" style="padding-left:10px;">
      <%-- <a class="button border-main" href="${ctx}/admin/goods/toaddgoods.html">添加货物</a>&nbsp --%>
      </ul>
    </div>
   
    <table class="table table-hover text-center" id="mytable">
      <tr>
        <th width="10%" style="text-align:left; padding-left:20px;">货物ID</th>
        <th width="7%">货物数量</th>
        <th width="8%">每份货物重量：公斤</th>
        <th width="15%">货物名称</th>
        <th width="15%">货物单价：公斤/元</th>
        <th width="15%">备注</th>
        <th width="30%">操作</th>
      </tr>
      <!-- <volist name="list" id="vo"> -->
    	<tr>
      	
          	<td style="text-align:left; padding-left:20px;">${id}</td>
          	 <td style="text-align:center; padding-left:20px;">${goodsNum}</td>
          	<td style="text-align:center; padding-left:20px;">${goodsWeight}</td>
			<td style="text-align:center; padding-left:20px;">${goodsName}</td>
			<td style="text-align:center; padding-left:20px;">${unitprice}</td>
			<td style="text-align:center; padding-left:20px;">${note}</td>
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