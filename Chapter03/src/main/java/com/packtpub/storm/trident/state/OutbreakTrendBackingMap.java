package com.packtpub.storm.trident.state;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import storm.trident.state.map.IBackingMap;
import org.apache.log4j.BasicConfigurator;   
import org.apache.log4j.PropertyConfigurator;   
import org.apache.log4j.xml.DOMConfigurator; 
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.io.*;

public class OutbreakTrendBackingMap implements IBackingMap<Long> {
    private static final Logger LOG = LoggerFactory.getLogger(OutbreakTrendBackingMap.class);
    Map<String, Long> storage = new ConcurrentHashMap<String, Long>();
    @Override
    public List<Long> multiGet(List<List<Object>> keys) {
        List<Long> values = new ArrayList<Long>();
        for (List<Object> key : keys) {
            Long value = storage.get(key.get(0));
            if (value == null) {
                values.add(new Long(0));
            } else {
                values.add(value);
            }
        }
        return values;
    }

    @Override
    public void multiPut(List<List<Object>> keys, List<Long> vals) {
	for (int i = 0; i < keys.size(); i++) {
            LOG.info("{\"Local\":\"" + keys.get(i).get(0) + ",\"Total Number\":" + vals.get(i) + "}");
            try {
            	Runtime.getRuntime().exec("/home/writeResult.sh {\"Local\":\"" + keys.get(i).get(0) + ",\"TotalNumber\":" +  vals.get(i) + "}");
	    	storage.put((String) keys.get(i).get(0), vals.get(i));
                Thread.sleep(1000);
            } catch (Exception e) {
              e.printStackTrace();
            }
        }
                }
        }
