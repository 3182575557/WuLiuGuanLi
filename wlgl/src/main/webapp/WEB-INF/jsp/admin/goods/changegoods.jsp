<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>修改货物</title>  
    <link rel="stylesheet" href="${ctx}/css/pintuer.css">
    <script src="${ctx}/js/jquery.js"></script>
    <script src="${ctx}/js/pintuer.js"></script>  
</head>
<body>
<div class="bg"></div>
<div class="container">
    <div class="line bouncein">
        <div class="xs6 xm4 xs3-move xm4-move">
            <div style="height:150px;"></div>
            <div class="media media-y margin-big-bottom">           
            </div>         
            <form id="formlogin" method="post" onsubmit="return false;">
            <div class="panel loginbox">
                <div class="text-center margin-big padding-big-top"><h1>修改货物</h1></div>
                
                <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物名：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goodsName" id="goodsName" value="${goodsName}"/>
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物数量：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goodsNum" id="goodsNum" value="${goodsNum}"/>
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    <input type="hidden" name="id" id="id" value="${id}"  />
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">每份货物重量：(千克)</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goodsWeight" id="goodsWeight" value="${goodsWeight}"/>
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物单价：(元/千克)</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="unitprice" id="unitprice" value="${unitprice}"/>
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">备注：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="note" id="note" value="${note}"/>
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                </div>
                <div style="padding:30px;"><input type="submit" class="button button-block bg-main text-big input-big" id="loginsubmit" value="修改"></div>
            </div>
            </form>          
        </div>
    </div>
</div>

<script type="text/javascript">
	var LOGIN = {
			checkInput:function() {
				if ($("#goodsName").val() == "") {
					//alert("货物名不能为空");
					$("#goodsName").focus();
					return false;
				}
				if ($("#ngoodsNum").val() == "") {
					//alert("密码不能为空");
					$("#ngoodsNum").focus();
					return false;
				}
				if ($("#goodsWeight").val() == "") {
					//alert("密码不能为空");
					$("#goodsWeight").focus();
					return false;
				}
				if ($("#unitprice").val() == "") {
					//alert("密码不能为空");
					$("#unitprice").focus();
					return false;
				}
				return true;
			},
			doLogin:function() {
				$.post("/wlgl/Goods/change.html", $("#formlogin").serialize(),function(data){
					//alert(data)
					if(data == "changesuccess"){
						alert("修改成功！");
						location.href = "${ctx}/admin/goods/togoodslist.html";
					} else {
						alert("修改失败！");
						$("#goodsName").select();
					}
				});
			},
			login:function() {
				if (this.checkInput()) {
					this.doLogin();
				}
			}
		
	};
	$(function(){
		$("#loginsubmit").click(function(){
			LOGIN.login();
		});
	});
</script>


</body>
</html>