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
    <div class="panel-head"><strong class="icon-reorder"> 订单列表</strong></div>
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
        <th >订单完成时间</th>
        <th >快递名称</th>
        <th >货物id</th>
        <th >客户id</th>
        <th >操作</th>
      </tr>
      <!-- <volist name="list" id="vo"> -->
      <c:forEach items="${pageInfo.getResults()}" var="data" varStatus="status">
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
          	<td style="text-align:left; padding-left:20px;"><fmt:formatDate value="${data.completionTime}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
          	 <td style="text-align:center; padding-left:20px;">${data.express}</td>
          	<td style="text-align:center; padding-left:20px;">${data.goodsId}</td>
			<td style="text-align:center; padding-left:20px;">${data.customerId}</td>
			<td style="text-align:center; padding-left:20px;">
			<a class="button border-main" onclick="gotoindex()">返回首页</a>
			</td>
	  	</tr>	
      </c:forEach>
    </table>
</form>
<!-- 分页 -->
      <div class="message">
                        <span style="color:black;font-family:宋体;">共</span><i style="color:blue;font-family:宋体;">${pageInfo.totalRecord}</i><span style="color:black;font-family:宋体;">条记录，当前显示第</span><i
                            style="color:red;font-family:宋体;">${pageInfo.pageNo}</i><span>/</span><i style="color:blue;font-family:宋体;">${pageInfo.totalPage}</i><span style="color:black;font-family:宋体;">页</span>
       </div>
      <div style="text-align:center;">
           <ul class="pagination">
               <c:if test="${pageInfo.pageNo!=1}">
                   <li><a class="button border-main" href="${ctx}/admin/order/toorderlist.html?pageNo=1">首页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/order/toorderlist.html?pageNo=${pageInfo.pageNo-1}">上一页</a></li>
               </c:if>
           
               <c:if test="${pageInfo.pageNo!=pageInfo.totalPage}">
                   <li><a class="button border-main" href="${ctx}/admin/order/toorderlist.html?pageNo=${pageInfo.pageNo+1}">下一页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/order/toorderlist.html?pageNo=${pageInfo.totalPage}">最后一页</a></li>
               </c:if>
               <c:if test="${pageInfo.totalPage>1}">
               		<select name="pagenum" id="pagenum">
						<c:forEach var="pagenum" begin="1" end="${pageInfo.totalPage}" step="1">
							<option value="${pagenum}" <c:if test="${pagenum == pageInfo.pageNo}">selected</c:if>>${pagenum }</option>
						</c:forEach>
					</select>
					<div class="field">
			          <button class="button bg-main icon-check-square-o" type="button" onclick="topage()">转到</button>   
			        </div>
               </c:if>
           </ul>
       </div>
  </div>
  
<script type="text/javascript">
function gotoindex(){
	location.href = "${ctx}/front/tofrontindex.html";	
}
</script>
</body>
</html>