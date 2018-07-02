<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>用户登录</title>  
    <link rel="stylesheet" href="${ctx}/css/pintuer.css">
    <link rel="stylesheet" href="${ctx}/css/front.css">
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
                <div class="text-center margin-big padding-big-top"><h1>用户登录</h1></div>
                <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                    <div class="form-group">
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="username" id="loginname" placeholder="用户名" data-validate="required:请填写账号" />
                            <span class="icon icon-user margin-small"></span>
                        </div>
                    </div>
                    <input type="hidden" name="type" value="1" />
                    <div class="form-group">
                        <div class="field field-icon-right">
                            <input type="password" class="input input-big" name="password" id="loginpwd" placeholder="登录密码" data-validate="required:请填写密码" />
                            <span class="icon icon-key margin-small"></span>
                        </div>
                    </div>
                    <%-- <c:if test="${lastresult!=''}">
                    <span class="input input-big" style="color: red;">${lastresult}</span>
                    </c:if> --%>
                </div>
                <div style="padding:30px;"><input type="submit" class="button button-block bg-main text-big input-big" id="loginsubmit" value="登录"></div>
                <div style="padding:30px;"><input type="submit" class="button button-block bg-main text-big input-big" id="adduser" value="去注册"></div>
            </div>
            </form>          
        </div>
    </div>
</div>

<script type="text/javascript">
	var LOGIN = {
			checkInput:function() {
				if ($("#loginname").val() == "") {
					//alert("用户名不能为空");
					$("#loginname").focus();
					return false;
				}
				if ($("#nloginpwd").val() == "") {
					//alert("密码不能为空");
					$("#nloginpwd").focus();
					return false;
				}
				return true;
			},
			doLogin:function() {
				$.post("/wlgl/User/login.html", $("#formlogin").serialize(),function(data){
					//alert(data)
					if (data == "jsp/loginresult") {
						alert("非法操作！");
					}else if(data == "jsp/front/index"){
						alert("登录成功！");
						location.href = "${ctx}/front/tofrontindex.html";
					} else {
						alert("用户名或密码错误！");
						$("#loginname").select();
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
	$(function(){
		$("#adduser").click(function(){
			location.href = "${ctx}/userregist.html";
		});
	});
	
</script>


</body>
</html>