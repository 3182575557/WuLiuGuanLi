<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/include/taglib.jsp" %>

<html>
<head>


</head>
<body>
  <div style="  position:fixed; top:20%; left:20%;width:100%; ">
      <p style="font:bold 5em 'MicroSoft YaHei'; color:#1296db;">欢迎进入武夷双星茶厂物流管理系统后台</p>
      <div style="font:bold 3em 'MicroSoft YaHei';position:absolute; left: 30%" id="show"></div></h2>
  </div>

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