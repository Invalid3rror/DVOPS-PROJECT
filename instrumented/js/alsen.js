function cov_b674lgudo(){var path="C:\\Users\\justi\\OneDrive - Temasek Polytechnic\\year2_sec sem\\DVOPS_Projects\\DVOPS-PROJECT\\public\\js\\alsen.js";var hash="8424b90b956d1fa83f1143d7f922e44827f960ce";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\justi\\OneDrive - Temasek Polytechnic\\year2_sec sem\\DVOPS_Projects\\DVOPS-PROJECT\\public\\js\\alsen.js",statementMap:{"0":{start:{line:2,column:17},end:{line:2,column:19}},"1":{start:{line:3,column:17},end:{line:3,column:29}},"2":{start:{line:4,column:2},end:{line:4,column:58}},"3":{start:{line:5,column:2},end:{line:5,column:70}},"4":{start:{line:6,column:2},end:{line:6,column:60}},"5":{start:{line:9,column:2},end:{line:13,column:3}},"6":{start:{line:10,column:4},end:{line:10,column:78}},"7":{start:{line:11,column:4},end:{line:11,column:76}},"8":{start:{line:12,column:4},end:{line:12,column:11}},"9":{start:{line:15,column:16},end:{line:15,column:36}},"10":{start:{line:16,column:2},end:{line:16,column:46}},"11":{start:{line:17,column:2},end:{line:17,column:63}},"12":{start:{line:18,column:2},end:{line:36,column:4}},"13":{start:{line:19,column:4},end:{line:19,column:48}},"14":{start:{line:20,column:4},end:{line:20,column:26}},"15":{start:{line:22,column:4},end:{line:35,column:5}},"16":{start:{line:23,column:6},end:{line:23,column:95}},"17":{start:{line:24,column:6},end:{line:24,column:79}},"18":{start:{line:27,column:6},end:{line:27,column:50}},"19":{start:{line:28,column:6},end:{line:28,column:56}},"20":{start:{line:29,column:6},end:{line:29,column:51}},"21":{start:{line:31,column:6},end:{line:31,column:42}},"22":{start:{line:33,column:6},end:{line:33,column:91}},"23":{start:{line:34,column:6},end:{line:34,column:78}},"24":{start:{line:38,column:2},end:{line:38,column:41}}},fnMap:{"0":{name:"addResource",decl:{start:{line:1,column:9},end:{line:1,column:20}},loc:{start:{line:1,column:23},end:{line:39,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:18,column:19},end:{line:18,column:20}},loc:{start:{line:18,column:31},end:{line:36,column:3}},line:18}},branchMap:{"0":{loc:{start:{line:9,column:2},end:{line:13,column:3}},type:"if",locations:[{start:{line:9,column:2},end:{line:13,column:3}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:9},"1":{loc:{start:{line:9,column:6},end:{line:9,column:81}},type:"binary-expr",locations:[{start:{line:9,column:6},end:{line:9,column:26}},{start:{line:9,column:30},end:{line:9,column:56}},{start:{line:9,column:60},end:{line:9,column:81}}],line:9},"2":{loc:{start:{line:22,column:4},end:{line:35,column:5}},type:"if",locations:[{start:{line:22,column:4},end:{line:35,column:5}},{start:{line:32,column:11},end:{line:35,column:5}}],line:22}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8424b90b956d1fa83f1143d7f922e44827f960ce"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_b674lgudo=function(){return actualCoverage;};}return actualCoverage;}cov_b674lgudo();function addResource(){cov_b674lgudo().f[0]++;var response=(cov_b674lgudo().s[0]++,"");var jsonData=(cov_b674lgudo().s[1]++,new Object());cov_b674lgudo().s[2]++;jsonData.title=document.getElementById("title").value;cov_b674lgudo().s[3]++;jsonData.description=document.getElementById("description").value;cov_b674lgudo().s[4]++;jsonData.author=document.getElementById("author").value;// Ensure all fields are filled out
cov_b674lgudo().s[5]++;if((cov_b674lgudo().b[1][0]++,jsonData.title=="")||(cov_b674lgudo().b[1][1]++,jsonData.description=="")||(cov_b674lgudo().b[1][2]++,jsonData.author=="")){cov_b674lgudo().b[0][0]++;cov_b674lgudo().s[6]++;document.getElementById("message").innerHTML='All fields are required!';cov_b674lgudo().s[7]++;document.getElementById("message").setAttribute("class","text-danger");cov_b674lgudo().s[8]++;return;}else{cov_b674lgudo().b[0][1]++;}var request=(cov_b674lgudo().s[9]++,new XMLHttpRequest());cov_b674lgudo().s[10]++;request.open("POST","/add-resource",true);cov_b674lgudo().s[11]++;request.setRequestHeader('Content-Type','application/json');cov_b674lgudo().s[12]++;request.onload=function(){cov_b674lgudo().f[1]++;cov_b674lgudo().s[13]++;response=JSON.parse(request.responseText);cov_b674lgudo().s[14]++;console.log(response);cov_b674lgudo().s[15]++;if(!response.message){cov_b674lgudo().b[2][0]++;cov_b674lgudo().s[16]++;document.getElementById("message").innerHTML='Added Resource: '+jsonData.title+'!';cov_b674lgudo().s[17]++;document.getElementById("message").setAttribute("class","text-success");// Clear form fields
cov_b674lgudo().s[18]++;document.getElementById("title").value="";cov_b674lgudo().s[19]++;document.getElementById("description").value="";cov_b674lgudo().s[20]++;document.getElementById("author").value="";cov_b674lgudo().s[21]++;window.location.href='index.html';}else{cov_b674lgudo().b[2][1]++;cov_b674lgudo().s[22]++;document.getElementById("message").innerHTML='Please enter a valid author email. ';cov_b674lgudo().s[23]++;document.getElementById("message").setAttribute("class","text-danger");}};cov_b674lgudo().s[24]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfYjY3NGxndWRvIiwiYWN0dWFsQ292ZXJhZ2UiLCJhZGRSZXNvdXJjZSIsImYiLCJyZXNwb25zZSIsInMiLCJqc29uRGF0YSIsIk9iamVjdCIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJiIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmQiLCJzdHJpbmdpZnkiXSwic291cmNlcyI6WyJhbHNlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhZGRSZXNvdXJjZSgpIHtcclxuICB2YXIgcmVzcG9uc2UgPSBcIlwiO1xyXG4gIHZhciBqc29uRGF0YSA9IG5ldyBPYmplY3QoKTtcclxuICBqc29uRGF0YS50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XHJcbiAganNvbkRhdGEuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGpzb25EYXRhLmF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpLnZhbHVlO1xyXG5cclxuICAvLyBFbnN1cmUgYWxsIGZpZWxkcyBhcmUgZmlsbGVkIG91dFxyXG4gIGlmIChqc29uRGF0YS50aXRsZSA9PSBcIlwiIHx8IGpzb25EYXRhLmRlc2NyaXB0aW9uID09IFwiXCIgfHwganNvbkRhdGEuYXV0aG9yID09IFwiXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5pbm5lckhUTUwgPSAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQhJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiL2FkZC1yZXNvdXJjZVwiLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgXHJcbiAgICBpZiAoIXJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLmlubmVySFRNTCA9ICdBZGRlZCBSZXNvdXJjZTogJyArIGpzb25EYXRhLnRpdGxlICsgJyEnO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLmlubmVySFRNTCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBhdXRob3IgZW1haWwuICc7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbn0iXSwibWFwcGluZ3MiOiJrckdBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosUUFBUyxDQUFBRSxXQUFXQSxDQUFBLENBQUcsQ0FBQUYsYUFBQSxHQUFBRyxDQUFBLE1BQ3JCLEdBQUksQ0FBQUMsUUFBUSxFQUFBSixhQUFBLEdBQUFLLENBQUEsTUFBRyxFQUFFLEVBQ2pCLEdBQUksQ0FBQUMsUUFBUSxFQUFBTixhQUFBLEdBQUFLLENBQUEsTUFBRyxHQUFJLENBQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUNQLGFBQUEsR0FBQUssQ0FBQSxNQUM1QkMsUUFBUSxDQUFDRSxLQUFLLENBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGFBQUEsR0FBQUssQ0FBQSxNQUN4REMsUUFBUSxDQUFDTSxXQUFXLENBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxLQUFLLENBQUNYLGFBQUEsR0FBQUssQ0FBQSxNQUNwRUMsUUFBUSxDQUFDTyxNQUFNLENBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBRXpEO0FBQUFYLGFBQUEsR0FBQUssQ0FBQSxNQUNBLEdBQUksQ0FBQUwsYUFBQSxHQUFBYyxDQUFBLFNB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