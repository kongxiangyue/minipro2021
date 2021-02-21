package request;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class readfile
 */

public class readfile extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public readfile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.print("11111");
		response.setContentType("text/json; charset=utf-8");
		 PrintWriter out = response.getWriter();
		 String target=request.getSession().getServletContext().getRealPath("\\")+"/upload/";
		 System.out.print(target);
		 File f = new File(target);  
		 JSONArray jsonarray = new JSONArray(); 
		    if (!f.exists())  
		    {  
		        out.println("查无文件");  
		        return;  
		    }  
		    File fa[] = f.listFiles();  
		    for(int i=0;i<fa.length;i++)  
		    {  
		        File fs = fa[i];  
		        System.out.print(fs.getName());
		        System.out.print("开始"+request.getContextPath()+"/"+fs.getName());
                JSONObject jsonobj = new JSONObject(); 
		        jsonobj.put("file", "http://127.0.0.1:8080"+request.getContextPath()+"/upload/"+fs.getName()); 
		        jsonarray.add(jsonobj); 
		    } 
		
		    out = response.getWriter(); 
            out.println(jsonarray);
		                   
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doGet(request, response);
	}
}
