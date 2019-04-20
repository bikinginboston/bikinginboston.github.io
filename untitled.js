<script type="text/javascript" src="data/crash_data.js"></script> 
										<script>
												function check15(crash) {
													var date =  new Date("" + crash.dispatch_ts)
													return date.getFullYear() == 2015
												}
												function check16(crash) {
													var date =  new Date("" + crash.dispatch_ts)
													return date.getFullYear() == 2016
												}
												function check17(crash) {
													var date =  new Date("" + crash.dispatch_ts)
													return date.getFullYear() == 2017
												}
												function check18(crash) {
													var date =  new Date("" + crash.dispatch_ts)
													return date.getFullYear() == 2018
												}
												var data15 = crash_data.filter(check15)
												var data16 = crash_data.filter(check16)
												var data17 = crash_data.filter(check17)
												var data18 = crash_data.filter(check18)
												var markers15 =[]
												var markers16 =[]
												var markers17 =[]
												var markers18 =[]

												for (var i = 0; i < data15.length; i++) {
													markers15.push(L.circle([data15[i].lat, data15[i].long], {
															color: '#e50cef',
															fillColor: '#e50cef',
															fillOpacity: 0.5,
															radius: 3
													}));
												}  			
												
												for (var i = 0; i < data16.length; i++) {
													markers16.push(L.circle([data16[i].lat, data16[i].long], {
															color: '#33a42c',
															fillColor: '#33a42c',
															fillOpacity: 0.5,
															radius: 3
													}));
												}  
												for (var i = 0; i < data17.length; i++) {
													markers17.push(L.circle([data17[i].lat, data17[i].long], {
															color: '#1376c8',
															fillColor: '#1376c8',
															fillOpacity: 0.5,
															radius: 3
													}));
												}  
												for (var i = 0; i < data18.length; i++) {
													markers18.push(L.circle([data18[i].lat, data18[i].long], {
															color: '#9282FF',
															fillColor: '#9282FF',
															fillOpacity: 0.5,
															radius: 3
													}));
												}  
												
												var layer15 = L.layerGroup(markers15);
												var layer16 = L.layerGroup(markers16);
												var layer17 = L.layerGroup(markers17);
												var layer18 = L.layerGroup(markers18);

												var mymap = L.map('mapid', {
													center: [42.35, -71.08],
													zoom: 5,
													layers: [layer15, layer16, layer17,layer18]
												});

												L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
													maxZoom: 17,
													minZoom: 9}).addTo(mymap);

													var overlayMaps = {
														"2015": layer15,
														"2016": layer16,
														"2017": layer17,
														"2018": layer18
													};	
												L.control.layers(null, overlayMaps).addTo(mymap);
	

											</script>