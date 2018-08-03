# Developer: Mayur Navinbhai Chhapra
# Purpos: Control Hardware of our PC by Python
# Description: This script will effect your mouse and scroll 500px in every 7 minuts. 
import pyautogui, sys
import threading
import time
import datetime

def autoPilotMode():
	print("Mayur's DesiJarvish!")
	print('દેશી જાર્વિસ, ઓટોપાયલટ મોડ ચાલુ')
	for i in range(1,45):
		time.sleep(60*7)
		pyautogui.scroll(-50)
		print("Jarvis Log: "+str(datetime.datetime.now().time()))
try:
	threading.Thread(target=autoPilotMode).start()
except:
	pass
