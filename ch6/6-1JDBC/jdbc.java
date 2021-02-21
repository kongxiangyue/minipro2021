package request;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
 
public class jdbc {    
public static void main(String[] args) throws ClassNotFoundException, SQLException 
     {
	 String uri="jdbc:mysql://127.0.0.1:3306/xinwen?useUnicode=true&amp;characterEncoding=utf-8";
	 String user="root";
	 String password="root";
	 Class.forName("com.mysql.jdbc.Driver"); //加载JDBC启动程序
	 //创建第一个Connection类型的con对象来建立连接
	 Connection con=DriverManager.getConnection(uri, user, password);
	 //创建第二个Statement类型的对象st作为sql语句的载体实现增删改查
	 Statement st=con.createStatement();
	 ResultSet rs=st.executeQuery("select * from wenzhang");
	 //4处理数据库的返回结果(使用ResultSet类)
	  while(rs.next()){
	   System.out.println(rs.getString("title")+" "+rs.getString("cTime"));}
	         
	   //关闭资源
	  rs.close();
	  st.close();
	  con.close();
	  }
}
