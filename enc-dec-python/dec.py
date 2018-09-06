fileName = raw_input("Insert fileName: ")
file = open(fileName,"r")
fileData = file.read()
originalList = fileData.split("$")

decList=[]
for i in range(0, len(originalList)):
	decList.append(chr(int(round(float(originalList[i])*2*2022))))
data=''
file = open("dataD2with2022.file","w")
file.write(data.join(decList))