<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>添加订单</title>  
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
                <div class="text-center margin-big padding-big-top"><h1>添加订单</h1></div>
                
                <div class="panel-body" style="padding:30px; padding-bottom:10px; padding-top:10px;">
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物名：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goods" id="goods" placeholder="货物名" data-validate="required:请填货物名称" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物数量：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goodsNum" id="goodsNum" placeholder="货物数量" data-validate="required:请填写货物数量" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">货物重量：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="goodsWeight" id="goodsWeight" placeholder="货物重量" data-validate="required:请填写货物重量" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">单价：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="unitprice" id="unitprice" placeholder="单价"  data-validate="required:请填写单价" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">收货人：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="consignee" id="consignee" placeholder="收货人"  data-validate="required:请填写收货人" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">收货地址：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="receivingAddress" id="receivingAddress" placeholder="收货地址"  data-validate="required:请填写收地址" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">联系电话：</span>
                        </div>
                        <div class="field field-icon-right">
                            <input type="text" class="input input-big" name="orderPhone" id="orderPhone" placeholder="联系电话"  data-validate="required:请填写联系电话" />
                            <span class="icon margin-small"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                    	<div class="field ">
                           <span class="icon input-big">客户：</span>
                        </div>
                        <div class="field field-icon-right">
                            <select name="customerId" id="customerId">
	                            <option value="0">==请选择==</option>
	
	                            <c:forEach items="${list}" var="var" varStatus="vs">
	                                <option value="${var.id}"> ${var.customerName}</option>
	                            </c:forEach>
                        	</select>
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
				if ($("#goods").val() == "") {
					$("#goods").focus();
					return false;
				}
				if ($("#ngoodsNum").val() == "") {
					$("#ngoodsNum").focus();
					return false;
				}
				if ($("#goodsWeight").val() == "") {
					$("#goodsWeight").focus();
					return false;
				}
				if ($("#unitprice").val() == "") {
					$("#unitprice").focus();
					return false;
				}
				if ($("#consignee").val() == "") {
					$("#consignee").focus();
					return false;
				}
				if ($("#receivingAddress").val() == "") {
					$("#receivingAddress").focus();
					return false;
				}
				if ($("#orderPhone").val() == "") {
					$("#orderPhone").focus();
					return false;
				}
				if ($("#orderUser").val() == "") {
					$("#orderUser").focus();
					return false;
				}
				
				
				return true;
			},
			doLogin:function() {
				$.post("/wlgl/Order/add.html", $("#formlogin").serialize(),function(data){
					//alert(data)
					if(data == "addsuccess"){
						alert("添加成功！");
						location.href = "${ctx}/admin/order/toorderlist.html";
					} else {
						alert("添加失败！");
						$("#goods").select();
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