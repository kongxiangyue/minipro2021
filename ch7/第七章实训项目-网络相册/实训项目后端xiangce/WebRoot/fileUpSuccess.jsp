<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
    <head>
        <title>文件上传成功</title>
    </head>
    <body>
        <h3>文件上传成功</h3>
        <hr/>
        文件标题:<s:property value="+ title"/><br/>
        <s:property value="fileFileName"/><br>
    </body>
</html>
