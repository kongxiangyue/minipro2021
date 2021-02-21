/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package fileUpDown;
import java.io.InputStream;
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class FileDownloadAction extends ActionSupport {
    //指定文件的下载路径
    private String path;
    public String getPath() {
        return path;
    }
    public void setPath(String path) {
        this.path = path;
    }
    //该方法返回一个InputStream类型的输入流，是下载目标文件的入口
    public InputStream getInputStream() throws Exception {
        return ServletActionContext.getServletContext().getResourceAsStream(path);
    }
    public String execute() throws Exception {
        return SUCCESS;
    }
}

