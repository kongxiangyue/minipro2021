/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package fileUpDown;
import com.opensymphony.xwork2.ActionSupport;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

public class UploadAction extends ActionSupport{
private File file;
private String fileContentType;
private String fileFileName;


public File getFile() {
	return file;
}
public void setFile(File file) {
	this.file = file;
}
public String getFileContentType() {
	return fileContentType;
}
public void setFileContentType(String fileContentType) {
	this.fileContentType = fileContentType;
}
public String getFileFileName() {
	return fileFileName;
}
public void setFileFileName(String fileFileName) {
	this.fileFileName = fileFileName;
}


public String execute() throws Exception {
        //得到上传文件在服务器的路径加文件名
         String target=ServletActionContext.getServletContext().getRealPath("/upload/"+fileFileName);
        //获得上传的文件
        File targetFile=new File(target);
         //通过struts2提供的FileUtils类拷贝
        try {
            FileUtils.copyFile(file, targetFile);
         } catch (IOException e) {
             e.printStackTrace();
        }
         return SUCCESS;
     }
	
}

