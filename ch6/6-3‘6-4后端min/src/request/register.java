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

import com.mysql.jdbc.PreparedStatement;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class register
 */
@WebServlet("/register")
public class register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public register() {
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
	       String name1 = request.getParameter("name");
	       String password1 = request.getParameter("password");
	       System.out.println("账号是"+name1+"密码是"+password1); //验证数据传递情况
	       try { 
	        	  Class.forName("com.mysql.jdbc.Driver");
	        		 String url="jdbc:mysql://localhost/useradmin?user=root&password=root&useUnicode=true&characterEncoding=UTF-8"; 
	        		  Connection con=DriverManager.getConnection(url);  
	                    String sql = "insert into user(name,password) values(?,?)";
	                    PreparedStatement pst = (PreparedStatement) con.prepareStatement(sql);
	                    pst.setObject(1,name1);
	                    pst.setObject(2,password1);
	                    int jieguo = pst.executeUpdate();    
	                    JSONArray jsonarray = new JSONArray();  
	                    JSONObject jsonobj = new JSONObject(); 
	                    jsonobj.put("jieguo", jieguo); 
	                    jsonarray.add(jsonobj); 
	                    out = response.getWriter(); 
		                out.println(jsonarray);
		                pst.close();   
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
