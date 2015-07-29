var token;
var tenantId;
function identity() {
	var passwordCredentials;
	var loginInfo;
	var requestBody;
	 
	this.getToken = function() {

		$.ajax({
			type: "GET",
			url: "http://140.92.27.174/bistro/services/demo/result",
	        headers: {
	            "Content-Type":"application/json"
	        },
			dataType: "json",
			processData: false,
			success: function(Jdata) {
				var resultInfo = "";
				$("#time").html("<h4>Time:</h4> " + new Date().toGMTString());
				resultInfo += "<thead>";
				resultInfo += "<tr>";
				resultInfo += "<th></th>";
				resultInfo += "<th>SF</th>";
				resultInfo += "<th>PHL</th>";
				resultInfo += "<th>Local</th>";
				resultInfo += "<th>NYC</th>";
				resultInfo += "</tr>";
				resultInfo += "</thead>";
//				for( var i =0 ; i< Jdata.data.length; i++) {
//					resultInfo += "<tr>";
//					resultInfo += "<td>" + Jdata.data[i].Local + "</td>";
//					resultInfo += "<td>" + Jdata.data[i].MRN + "</td>";
//					resultInfo += "<td>" + Jdata.data[i].totalNumber + "</td>";
//					resultInfo += "</tr>";
//				}
		        
				resultInfo += "<tr>";
				resultInfo += "<td><span>320 (Bacterial meningitis)</span></td>";
				resultInfo += "<td><span id=\"s1\"></span></td>";
				resultInfo += "<td><span id=\"s2\"></span></td>";
				resultInfo += "<td><span id=\"s3\"></span></td>";
				resultInfo += "<td><span id=\"s4\"></span></td>";
				resultInfo += "</tr>";
				resultInfo += "<tr>";
				resultInfo += "<td><span>323 (Encephalitis myelitis )</span></td>";
				resultInfo += "<td><span id=\"p1\"></span></td>";
				resultInfo += "<td><span id=\"p2\"></span></td>";
				resultInfo += "<td><span id=\"p3\"></span></td>";
				resultInfo += "<td><span id=\"p4\"></span></td>";
				resultInfo += "</tr>";
				resultInfo += "<tr>";
				resultInfo += "<td><span>324 (Intracranial intraspinal )</span></td>";
				resultInfo += "<td><span id=\"l1\"></span></td>";
				resultInfo += "<td><span id=\"l2\"></span></td>";
				resultInfo += "<td><span id=\"l3\"></span></td>";
				resultInfo += "<td><span id=\"l4\"></span></td>";
				resultInfo += "</tr>";
				resultInfo += "<tr>";
				resultInfo += "<td><span>325 (Phlebitis thrombophlebitis )</span></td>";
				resultInfo += "<td><span id=\"n1\"></span></td>";
				resultInfo += "<td><span id=\"n2\"></span></td>";
				resultInfo += "<td><span id=\"n3\"></span></td>";
				resultInfo += "<td><span id=\"n4\"></span></td>";
				resultInfo += "</tr>";
//				$("#result_table").html(resultInfo);
				if(Jdata.data[0].Local == "SF") {
					if(Jdata.data[0].MRN == 320) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#s1").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#s1").attr("style", "background-color: white;");
						}
						$("#s1").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 321) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#p1").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#p1").attr("style", "background-color: white;");
						}
						$("#p1").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 322) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#l1").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#l1").attr("style", "background-color: white;");
						}
						$("#l1").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 323) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#n1").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#n1").attr("style", "background-color: white;");
						}
						$("#n1").html(Jdata.data[0].totalNumber);
					}
				} else if(Jdata.data[0].Local == "PHL") {
					if(Jdata.data[0].MRN == 320) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#s2").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#s2").attr("style", "background-color: white;");
						}
						$("#s2").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 321) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#p2").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#p2").attr("style", "background-color: white;");
						}
						$("#p2").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 322) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#l2").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#l2").attr("style", "background-color: white;");
						}
						$("#l2").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 323) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#n2").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#n2").attr("style", "background-color: white;");
						}
						$("#n2").html(Jdata.data[0].totalNumber);
					}
				} else if(Jdata.data[0].Local == "LA") {
					if(Jdata.data[0].MRN == 320) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#s3").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#s3").attr("style", "background-color: white;");
						}
						$("#s3").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 321) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#p3").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#p3").attr("style", "background-color: white;");
						}
						$("#p3").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 322) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#l3").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#l3").attr("style", "background-color: white;");
						}
						$("#l3").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 323) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#n3").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#n3").attr("style", "background-color: white;");
						}
						$("#n3").html(Jdata.data[0].totalNumber);
					}
				} else if(Jdata.data[0].Local == "NYC") {
					if(Jdata.data[0].MRN == 320) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#s4").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#s4").attr("style", "background-color: white;");
						}
						$("#s4").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 321) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#p4").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#p4").attr("style", "background-color: white;");
						}
						$("#p4").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 322) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#l4").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#l4").attr("style", "background-color: white;");
						}
						$("#l4").html(Jdata.data[0].totalNumber);
					} else if(Jdata.data[0].MRN == 323) {
						if(Jdata.data[0].totalNumber > 800) {
							$("#n4").attr("style", "background-color: #FFB7DD;");
						} else {
							$("#n4").attr("style", "background-color: white;");
						}
						$("#n4").html(Jdata.data[0].totalNumber);
					}
				}
//				window.setTimeout(identity, 1000);
//				
				
			},
			error: function() {
				alert("Get result failed!!")
			}
		});
	};
}