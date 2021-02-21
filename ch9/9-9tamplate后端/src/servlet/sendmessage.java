package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;

import javax.net.ssl.HttpsURLConnection;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.ConnectException;
import java.net.URL;
import java.util.Map;
/**
 * Servlet implementation class requestPayment
 */
@WebServlet("/sendmessage")
public class sendmessage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String App_Id="wx7522892eae255ba1";
	public static final String APPSECRET="7ab279549ddd6098f7ce5a4fb41424d5";
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public sendmessage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ACCESS_TOKEN=request.getParameter("ACCESS_TOKEN");
		String tmpurl = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token="+ACCESS_TOKEN; 
        System.out.println("url="+tmpurl);
        JSONObject json = new JSONObject();
        String openid=request.getParameter("openid");
        String templat_id="hlfC496na3I_BCdl7bSA4a2-Z_mOg2qjFko-hGkMtf4";	
        String pageurl="m.baidu.com";
        String formId=request.getParameter("formId");
        String keyword11=request.getParameter("keyword11");
        String keyword21=request.getParameter("keyword21");
        System.out.println("keyword21===="+keyword21);
        String keyword31=request.getParameter("keyword31");
        System.out.println("keyword31===="+keyword31);
        String keyword41=request.getParameter("keyword41");
        String keyword51=request.getParameter("keyword51");
        String keyword61=request.getParameter("keyword61");
        System.out.println("keyword61===="+keyword61);
        JSONObject data=tool.packJsonmsg(keyword11, keyword21, keyword31, keyword41, keyword51, keyword61);
        try {
            json.put("touser", openid);
            json.put("template_id", templat_id);
            json.put("page", pageurl);
            json.put("form_id", formId);
            json.put("data",data);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        String result = tool.httpsRequest(tmpurl, "POST", json.toString());
       // System.err.println(result);
       // return "success";
        response.setContentType("application/json;charset=UTF-8");
        response.setHeader("catch-control", "no-catch");
        PrintWriter out = response.getWriter();
        out.write(result);
        out.flush();
        out.close();
	}

}
