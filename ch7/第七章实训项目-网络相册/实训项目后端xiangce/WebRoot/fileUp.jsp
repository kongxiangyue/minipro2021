<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
    <head><title>文件上传</title></head> <body>
        文件上传
        <hr/>
      <s:form action="UploadAction"  enctype="multipart/form-data" method="post">
         <input type="file" name="file"/>
        <input type="submit" value="上传"/>
        </s:form>
</body></html>
