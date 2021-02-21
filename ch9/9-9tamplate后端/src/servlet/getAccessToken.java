package servlet;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class loginservlet
 */
@WebServlet("/getAccessToken")
public class getAccessToken extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    private String appid = "wx800eb4451b223c35";
    private String secretKey = "c618f0e1d9038d956bc405c9a0a837d1";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doGet--------------------");
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("doPost--------------------");
        String results = "";
        String url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+secretKey;   
            //接口地址https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
        System.out.println("url"+url);
        results = tool.sendGetReq(url);// 发送http请求
        System.out.println("AccessToken是"+results);
    
        response.setContentType("application/json;charset=UTF-8");
        response.setHeader("catch-control", "no-catch");
        PrintWriter out = response.getWriter();
        out.write(results);
        out.flush();
        out.close();
    }
}
