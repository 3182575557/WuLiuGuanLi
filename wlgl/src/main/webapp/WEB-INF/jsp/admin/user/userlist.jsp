<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
    <div class="panel-head"><strong class="icon-reorder"> 用户列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
    <div class="padding border-bottom">
      <ul class="search" style="padding-left:10px;">
      <%-- <a class="button border-main" href="${ctx}/admin/user/toadduser.html">添加用户</a>&nbsp --%>
      <a class="button border-main" href="${ctx}/admin/user/toaddadmin.html">添加管理员</a>&nbsp
      </ul>
    </div>
   
    <table class="table table-hover text-center" id="mytable">
      <tr>
        <th width="15%" style="text-align:left; padding-left:20px;">ID</th>
        <th width="20%">用户名</th>
        <th width="20%">密码</th>
        <th width="15%">身份</th>
        <th width="30%">操作</th>
      </tr>
      <!-- <volist name="list" id="vo"> -->
      <c:forEach items="${pageInfo.getResults()}" var="data" varStatus="status">
      	<tr>
      	
          	<td style="text-align:left; padding-left:20px;">${data.id}</td>
          	 <td style="text-align:center; padding-left:20px;">${fn:length(data.username) > 15 ? fn:substring(data.username,0,15) : data.username}${fn:length(data.username) > 15 ? '...' : ''}</td>
          	<td style="text-align:center; padding-left:20px;">${data.password}</td>
			<td style="text-align:center; padding-left:20px;">${data.type==1?"普通用户":"管理员"}</td>
			<td style="text-align:center; padding-left:20px;">
			<%-- <a class="button border-main" href="${ctx}/admin/user/toadduser.html">添加</a> --%>
			<a class="button border-main" href="${ctx}/admin/user/tochangeuser.html?id=${data.id}">修改</a>
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
                   <li><a class="button border-main" href="${ctx}/admin/user/touserlist.html?pageNo=1">首页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/user/touserlist.html?pageNo=${pageInfo.pageNo-1}">上一页</a></li>
               </c:if>
             <%--   <c:forEach items="${pageInfo.navigatepageNums}" var="navigatepageNum">
               
                   <c:if test="${navigatepageNum==pageInfo.pageNum}">
                       <li class="active"><a href="javascript:queryAllDevices(${navigatepageNum});">${navigatepageNum}</a></li>
                   </c:if>
                   <c:if test="${navigatepageNum!=pageInfo.pageNum}">
                       <li><a href="${ctx}/Web/${paths}.html?pageNo=${navigatepageNum}">${navigatepageNum}</a></li>
                   </c:if>
               </c:forEach> --%>
               
               
               <c:if test="${pageInfo.pageNo!=pageInfo.totalPage}">
                   <li><a class="button border-main" href="${ctx}/admin/user/touserlist.html?pageNo=${pageInfo.pageNo+1}">下一页</a></li>
                   <li><a class="button border-main" href="${ctx}/admin/user/touserlist.html?pageNo=${pageInfo.totalPage}">最后一页</a></li>
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
//搜索
/* function getContext(){  
// 	$post("${ctx}/hello/user/totxt.html",${userlist},function(data){
		alert(data);
// 	});
} */

 function topage() {
	var pagenum = $("#pagenum").val();
	window.location.href="${ctx}/admin/user/touserlist.html?pageNo=" + pagenum;
}

/* function changesearch(){			
	var keywords=$("#keywords").val();
	location.href="${ctx}/hello/user/search.html?keywords="+keywords;
} */

//单个删除
function del(id){
	var r=confirm("您确定要删除吗?");
	if(r==true){
 		url="${ctx}/User/delete.html?id="+id;
 		$.post(url, function(data){
			if(data == "deletesuccess"){
				alert('删除成功！');
			}else{
				alert('删除失败！');
			}
			location.href = "${ctx}/admin/user/touserlist.html";
	});
	}else{
		return false;
	}
}

/* //全选
$("#checkall").click(function(){ 
  $("input[name='id[]']").each(function(){
	  if (this.checked) {
		  this.checked = false;
	  }
	  else {
		  this.checked = true;
	  }
  });
}) */

/* //批量删除
function DelSelect(){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		var t=confirm("您确认要删除选中的内容吗？");
		if (t==false) return false;		
		$("#listform").submit();		
	}
	else{
		alert("请选择您要删除的内容!");
		return false;
	}
} */

/* //批量排序
function sorts(){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){	
		
		$("#listform").submit();		
	}
	else{
		alert("请选择要操作的内容!");
		return false;
	}
}
 */

/* //批量首页显示
function changeishome(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");		
	
		return false;
	}
}
 */
/* //批量推荐
function changeisvouch(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");	
		
		return false;
	}
}
 */
/* //批量置顶
function changeistop(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){		
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");		
	
		return false;
	}
}
 */

/* //批量移动
function changecate(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){		
		
		$("#listform").submit();		
	}
	else{
		alert("请选择要操作的内容!");
		
		return false;
	}
}
 */
/* //批量复制
function changecopy(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){	
		var i = 0;
	    $("input[name='id[]']").each(function(){
	  		if (this.checked==true) {
				i++;
			}		
	    });
		if(i>1){ 
	    	alert("只能选择一条信息!");
			$(o).find("option:first").prop("selected","selected");
		}else{
		
			$("#listform").submit();		
		}	
	}
	else{
		alert("请选择要复制的内容!");
		$(o).find("option:first").prop("selected","selected");
		return false;
	}
} */ 

</script>
</body>
</html>