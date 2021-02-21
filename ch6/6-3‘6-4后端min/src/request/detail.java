package request;

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

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class detail
 */
@WebServlet("/detail")
public class detail extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public detail() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json; charset=utf-8");
		 PrintWriter out = response.getWriter();
	     response.setHeader("Access-Control-Allow-Origin", "*");
	      response.setHeader("Access-Control-Allow-Methods", "GET,POST");  
	       String id = request.getParameter("id");
	       int id1=Integer.parseInt(id);
	       System.out.println("id="+id); //验证数据传递情况
	       try { 
	        	  Class.forName("com.mysql.jdbc.Driver");
	        		 String url="jdbc:mysql://localhost/xinwen?user=root&password=root&useUnicode=true&characterEncoding=UTF-8"; 
	        		  Connection con=DriverManager.getConnection(url);
	                   Statement stmt = con.createStatement(); 
	                    String sql = "SELECT * FROM wenzhang where id="+id1;
	                    ResultSet rs = stmt.executeQuery(sql);
	                    JSONArray jsonarray = new JSONArray();  
	                    JSONObject jsonobj = new JSONObject(); 
	                    while(rs.next()){      
                       jsonobj.put("title", rs.getString("title"));  
                       jsonobj.put("cTime", rs.getString("cTime"));   
                       jsonobj.put("img", rs.getString("img"));   
	                   jsonobj.put("content", rs.getString("content"));  
	                   jsonarray.add(jsonobj);             
	                     }       
	                   out = response.getWriter(); 
	                   out.println(jsonarray);
	              
	                   rs.close();   
	                    stmt.close();   
	                    con.close();                  
	                }catch (Exception e) { 
	                       out.print("get data error!"); 
	                      e.printStackTrace(); }    
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   this.doGet(request, response);
	}

}
