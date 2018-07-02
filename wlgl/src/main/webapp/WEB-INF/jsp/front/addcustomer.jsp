<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>添加客户</title>  
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
                <div class="text-center margin-big padding-big-top"><h1>添加客户</h1></div>
                
                <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">客户名：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="customerName" id="customerName" placeholder="客户名" data-validate="required:请填客户名" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">电话：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="customerPhone" id="customerPhone" placeholder="电话" data-validate="required:请填写电话" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    
                    	<div class="field ">
                           <span class="icon input-big">客户地址：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="customerAddress" id="customerAddress" placeholder="客户地址" data-validate="required:请填客户地址" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    <div class="form-group">
                    
                    	<div class="field ">
                           <span class="icon input-big">备注：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="note" id="note" placeholder="备注" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                </div>
                <div style="padding:30px;"><input type="submit" class="button button-block bg-main text-big input-big" id="loginsubmit" value="添加"></div>
            </div>
            </form>          
        </div>
    </div>
</div>

<script type="text/javascript">
	var LOGIN = {
			checkInput:function() {
				if ($("#customerName").val() == "") {
					//alert("客户名不能为空");
					$("#customerName").focus();
					return false;
				}
				if ($("#ncustomerPhone").val() == "") {
					//alert("密码不能为空");
					$("#ncustomerPhone").focus();
					return false;
				}
				if ($("#customerAddress").val() == "") {
					//alert("密码不能为空");
					$("#customerAddress").focus();
					return false;
				}
				return true;
			},
			doLogin:function() {
				$.post("/wlgl/Customer/add.html", $("#formlogin").serialize(),function(data){
					//alert(data)
					if(data == "addsuccess"){
						alert("添加成功！");
						location.href = "${ctx}/front/tofrontindex.html";
					} else {
						alert("添加失败！如果已完善过请选择修改操作");
						location.href = "${ctx}/front/tofrontindex.html";
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