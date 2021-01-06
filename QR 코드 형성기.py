import qrcode
import tkinter.ttk as ttk
from tkinter import *

def qrmaker():
    title = str(e1.get())
    if str(listbox.curselection())[1] == '0':
        food = '요거트'
    elif str(listbox.curselection())[1] == '1':
        food = '달걀'
    elif str(listbox.curselection())[1] == '2':
        food = '두부'
    elif str(listbox.curselection())[1] == '3':
        food = '우유'
    if (int(combomonth.get()) < 10) and (int(combodate.get()) < 10):
        expiration = str(comboyear.get()) + '0' + str(combomonth.get()) + '0' + str(combodate.get())
    elif (int(combomonth.get()) < 10):
        expiration = str(comboyear.get()) + '0' + str(combomonth.get()) + str(combodate.get())
    elif (int(combodate.get()) < 10):
        expiration = str(comboyear.get()) + str(combomonth.get()) + '0' + str(combodate.get())

    qr = 'https://foodprint-oasis.herokuapp.com/cal-foodprint?expiration='+expiration+'&foodname='+food
    img=qrcode.make(qr)
    img.save(title+'.png')
    window.quit()
    window.destroy()

window = Tk()

window.title('QR코드 생성기')
window.geometry('500x400')

img = PhotoImage(file = 'image/title.png' , master=window)
img = img.subsample(5)

l = Label(window,text='QRcode maker', font=('맑은고딕',23))
l.place(x =180, y = 45)

l0 = Label(window)
l0.config(image = img)
l0.place(x =85, y = 30, width = 80, height = 80)

l1 = Label(window,text='QR코드명', font=('맑은고딕',13))
l1.place(x =100, y = 130)
l2 = Label(window,text='유통기한', font=('맑은고딕',13))
l2.place(x =100, y = 180)
l3 = Label(window,text='해당음식', font=('맑은고딕',13))
l3.place(x =100, y = 230)

e1 = Entry(window, width=31)
e1.place(x =200, y = 130)

year = [str(i) for i in range(2020, 2031)]
month = [str(i) for i in range(1, 13)]
date = [str(i) for i in range(1, 32)]

comboyear = ttk.Combobox(window, height=5, width=6, values=year)
comboyear.place(x =200, y = 180)
comboyear.set('년')

combomonth = ttk.Combobox(window, height=5, width=6, values=month)
combomonth.place(x =280, y = 180)
combomonth.set('월')

combodate = ttk.Combobox(window, height=5, width=6, values=date)
combodate.place(x =360, y = 180)
combodate.set('일')


listbox = Listbox(window, selectmode='single',height=0, width = 7)
listbox.insert(0,'요거트')
listbox.insert(1,'달걀')
listbox.insert(2,'두부')
listbox.insert(3,'우유')
listbox.place(x =200, y = 230)

b1 = Button(window, text='입력 완료', command = qrmaker)
b1.place(x =200, y = 320, width = 80, height = 30)



window.mainloop()
