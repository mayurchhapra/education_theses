fileName = raw_input("Insert fileName: ")
file = open(fileName,"r")

fileData = file.read();
encList = []
encJoinChar="$"
for i in range(0,len(fileData)):
	encList.append(str(ord(fileData[i])/2.00/(2022)))

encData = encJoinChar.join(encList)
file = open(fileName+"-dataE2with2022.file","w")
file.write(encData);

splitedList = encData.split('$')
