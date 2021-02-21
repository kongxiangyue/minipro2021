package servlet;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ConnectException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;






import java.util.Date;

import javax.net.ssl.HttpsURLConnection;

public class tool {
	
	public static   JSONObject packJsonmsg(String keyword11, String keyword21, String keyword31, String keyword41, String keyword51, String keyword61){
	    JSONObject json = new JSONObject();
	    try {
	        
	        JSONObject keyword1 = new JSONObject();
	        keyword1.put("value", keyword11);
	        keyword1.put("color", "#173177");
	        json.put("keyword1", keyword1);
	        
	        JSONObject keyword2 = new JSONObject();
	        keyword2.put("value", keyword21);
	        keyword2.put("color", "#173177");
	        json.put("keyword2", keyword2);
	        System.out.println("keyword21++++"+keyword21);
	        
	        JSONObject keyword3 = new JSONObject();
	        keyword3.put("value", keyword31);
	        keyword3.put("color", "#173177");
	        json.put("keyword3", keyword3);
	        System.out.println("keyword31++++"+keyword31);
	        
	        JSONObject keyword4 = new JSONObject();
	        keyword4.put("value", keyword41);
	        keyword4.put("color", "#173177");
	        json.put("keyword4", keyword4);
	        
	        JSONObject keyword5 = new JSONObject();
	        keyword5.put("value", keyword51);
	        keyword5.put("color", "#173177");
	        json.put("keyword5", keyword5);
	        
	        JSONObject keyword6 = new JSONObject();
	        keyword6.put("value", keyword61);
	        keyword6.put("color", "#173177");
	        json.put("keyword6", keyword6);
	       
	    } catch (JSONException e) {
	        e.printStackTrace();
	    }
	    return json;
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
    
    public static String httpsRequest(String requestUrl, String requestMethod, String outputStr){
        try {
            URL url = new URL(requestUrl);
            HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setUseCaches(false);
            // 设置请求方式（GET/POST）
            conn.setRequestMethod(requestMethod);
            conn.setRequestProperty("content-type", "application/x-www-form-urlencoded");
            // 当outputStr不为null时向输出流写数据
            if (null != outputStr) {
                OutputStream outputStream = conn.getOutputStream();
                // 注意编码格式
                outputStream.write(outputStr.getBytes("UTF-8"));
                outputStream.close();
            }
            // 从输入流读取返回内容
            InputStream inputStream = conn.getInputStream();
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "utf-8");
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            String str = null;
            StringBuffer buffer = new StringBuffer();
            while ((str = bufferedReader.readLine()) != null) {
                buffer.append(str);
            }
            // 释放资源
            bufferedReader.close();
            inputStreamReader.close();
            inputStream.close();
            inputStream = null;
            conn.disconnect();
            return buffer.toString();
        } catch (ConnectException ce) {
            System.out.println("连接超时：{}");
        } catch (Exception e) {
            System.out.println("https请求异常：{}");
        }
        return null;
    }
}
