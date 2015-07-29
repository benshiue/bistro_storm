# bistro_storm
## 1. Storm code
/root/Chapter03/src/main/java/com/packtpub/storm/trident

在此路徑底下會有主要三個 folder 
spout 主要用於產生 random 資料以及中間的運算過程
topology 主要用於串接所有的 bolt workflow
state 主要用於處理最後檔案輸出後會產生至哪裡

## 2. Storm command
mvn clean //先解除之前的打包
mvn package DesipTests //打包所有的code to jar 檔
storm jar classes.com.packtpub.storm.trident.topology.OutbreakDetectionTopology //run 打包後的 jar 檔
     
     PS 1:  /root/Chapter03/pom.xml => 用於打包時自動去抓對應版號的 lib
     PS 2:  /root/Chapter03/target => 打包完成的 jar 檔存於此目錄下
     PS 3: 要將 storm jar 指令後面的/ 改成 .
