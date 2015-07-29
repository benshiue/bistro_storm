package tw.org.iii.data;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import tw.org.iii.cosa.utility.HttpResponse;
import tw.org.iii.cosa.utility.HttpStatus;

@Path("/demo")
public class RESTFul {
	@GET
	@Path("/result")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response getResult (InputStream requestBody) throws JSONException, IOException {
		JSONObject tempObj = new JSONObject();
		JSONObject respObj = new JSONObject();
		JSONArray arrObj = new JSONArray();
		String line = null;
		String local = null;
		String mrn = null;
		String totalNumber = null;
	    BufferedReader in = new BufferedReader(new InputStreamReader(Runtime.getRuntime().exec("/home/tail.sh").getInputStream()));
	    while((line = in.readLine())!= null) {
	    	JSONObject parseObj = new JSONObject();
	    	tempObj = new JSONObject(line);
	    	local = tempObj.getString("Local");
	    	mrn = tempObj.getString("MRN");
	    	totalNumber = tempObj.getString("TotalNumber");
	    	parseObj.put("Local", local);
	    	parseObj.put("MRN", mrn);
	    	parseObj.put("totalNumber", totalNumber);
	    	arrObj.put(parseObj);
	    }
        return HttpResponse.createJsonResponse(HttpStatus._200_SUCCEEDED, respObj.put("data", arrObj)).build();
	}
}
