package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import servlet.tool;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.github.wxpay.sdk.WXPayUtil;

/**
 * Servlet implementation class order
 */
@WebServlet("/order")
public class order extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public order() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONArray results = null;
		 JSONObject obj = new JSONObject();  
	     obj.put("return_code", "fail") ;  
	     results.add(obj) ; 
            String openid = request.getParameter("openid");
            System.out.println("openid = " + openid);
            String reqStr = tool.getReqStr(openid); //组装预下单的请求数据
            String url="https://api.mch.weixin.qq.com/pay/unifiedorder"+"?order"+reqStr;
            System.out.println("reqStr=" + reqStr);
            String results1=tool.sendGetReq(url);//发送post数据到微信预下单
           
            System.out.println("prepay from weixin: \n " + results1);
            Map<String,String> return_data = null;
            try {
                return_data = WXPayUtil.xmlToMap(results1);//微信的一个工具类
            } catch (Exception e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
                System.out.println(e.getMessage());
            }
            String return_code = return_data.get("return_code");
            System.out.println("return_code=" + return_code);
            if("SUCCESS".equals(return_code)){
                String prepay_id = return_data.get("prepay_id");
                results = tool.conPayParam(prepay_id); //组装返回数据
            }
            response.setContentType("application/json;charset=UTF-8");
            response.setHeader("catch-control", "no-catch");
            PrintWriter out = response.getWriter();
            out.write(results);
            out.flush();
            out.close();
        }
	

}
