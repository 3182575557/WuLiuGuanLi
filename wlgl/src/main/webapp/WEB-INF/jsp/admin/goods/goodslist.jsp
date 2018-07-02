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
    <div class="panel-head"><strong class="icon-reorder"> 货物列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
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
      <c:forEach items="${pageInfo.getResults()}" var="data" varStatus="status">
      	<tr>
      	
          	<td style="text-align:left; padding-left:20px;">${data.id}</td>
          	 <td style="text-align:center; padding-left:20px;">${data.goodsNum}</td>
          	<td style="text-align:center; padding-left:20px;">${data.goodsWeight}</td>
			<td style="text-align:center; padding-left:20px;">${data.goodsName}</td>
			<td style="text-align:center; padding-left:20px;">${data.unitprice}</td>
			<td style="text-align:center; padding-left:20px;">${data.note}</td>
			<td style="text-align:center; padding-left:20px;">
			<%--  总价：  ${data.goodsNum*data.unitprice*data.goodsWeight} --%>
			<%-- <a class="button border-main" href="${ctx}/admin/goods/toaddgoods.html">添加</a> --%>
			<a class="button border-main" href="${ctx}/admin/goods/tochangegoods.html?id=${data.id}">修改</a>
			<a class="button border-main" onclick="del(${data.id})">删除</a>
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
                   <li><a class="button border-main" href="${ctx}/admin/goods/togoodslist.html?pageNo=1">首页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/goods/togoodslist.html?pageNo=${pageInfo.pageNo-1}">上一页</a></li>
               </c:if>
               
               
               <c:if test="${pageInfo.pageNo!=pageInfo.totalPage}">
                   <li><a class="button border-main" href="${ctx}/admin/goods/togoodslist.html?pageNo=${pageInfo.pageNo+1}">下一页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/goods/togoodslist.html?pageNo=${pageInfo.totalPage}">最后一页</a></li>
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

 function topage() {
	var pagenum = $("#pagenum").val();
	window.location.href="${ctx}/admin/goods/togoodslist.html?pageNo=" + pagenum;
}


//单个删除
function del(id){
	var r=confirm("您确定要删除吗?");
	if(r==true){
		url="${ctx}/Goods/delete.html?id="+id;
 		$.post(url, function(data){
			if(data == "deletesuccess"){
				alert('删除成功！');
			}else{
				alert('删除失败！');
			}
			location.href = "${ctx}/admin/goods/togoodslist.html";
	});
	}else{
		return false;
	}
}

</script>
</body>
</html>