package servlet;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;





import com.github.wxpay.sdk.*;
import com.github.wxpay.sdk.WXPayConstants.SignType;

import java.util.Date;

public class tool {
	public static String getReqStr(String openid){
        Map<String,String> data = new HashMap<String,String>();
        String out_trade_no = setTradeNo();//
        //
        data.put("appid", "你的appid");
        data.put("mch_id","你的mer_id");
        data.put("nonce_str", WXPayUtil.generateNonceStr());
        data.put("sign_type", "MD5");
        data.put("body", "spy test");
        data.put("out_trade_no", out_trade_no);
        data.put("device_info", "");
        data.put("fee_type", "CNY");
        data.put("total_fee", "1");//1分钱
        data.put("spbill_create_ip", "123.12.12.123");
        data.put("notify_url", "http://xxx/wxpay/notify");
        data.put("trade_type", "JSAPI");
        data.put("product_id", "12");
        data.put("openid", openid);
        try {
            String sign = WXPayUtil.generateSignature(data, "你的merKey", SignType.MD5);
            data.put("sign", sign);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("sign error");
        }
        String reqBody = null;
        try {
            reqBody = WXPayUtil.mapToXml(data);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return reqBody;
    }

//保证唯一
    public static String setTradeNo(){
    	Random rdm = new Random(6);
        String orderid = "20211909105011"+ rdm.nextInt();
        System.out.println("orderid = " + orderid);
        return orderid;
    }

    //组装返回客户端的请求数据
    public static  JSONArray conPayParam(String prepayid){
        String results = "";
        Map<String,String> map = new HashMap<String,String>();
        map.put("appId", "你的appid");  
        String timeStamp=Long.toString(WXPayUtil.getCurrentTimestamp());
        map.put("timeStamp", timeStamp);
        map.put("nonceStr", WXPayUtil.generateNonceStr());
        map.put("package", "prepay_id=" + prepayid);
        map.put("signType", "MD5");   //五个参数
        String sign = null;
        try {
            sign = WXPayUtil.generateSignature(map,"你的merKey", SignType.MD5);//第六个参数
            map.put("sign", sign);  
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        JSONArray jsonarray = new JSONArray();  
        JSONObject jsonobj = new JSONObject(); 
        jsonobj.put("appId", "你的appid");  
        map.put("timeStamp", timeStamp); 
        jsonobj.put("nonceStr", WXPayUtil.generateNonceStr());   
        jsonobj.put("package", "prepay_id=" + prepayid);  
        jsonobj.put("signType", "MD5");  
        jsonobj.put("sign", sign);  
        jsonarray.add(jsonobj);    
        return jsonarray;
    }


    public static String sendGetReq(String url) {
        String result = "";
        BufferedReader in = null;
        try {
            String urlNameString = url;
            URL realUrl = new URL(urlNameString);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            connection.connect();
            // 获取所有响应头字段
            java.util.Map<String, List<String>> map = connection.getHeaderFields();
            // 遍历所有的响应头字段
            for (String key : map.keySet()) {
                System.out.println(key + "--->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } catch (Exception e) {
            System.out.println("发送GET请求出现异常！" + e);
            e.printStackTrace();
        } // 使用finally块来关闭输入流
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return result;
    }
}
