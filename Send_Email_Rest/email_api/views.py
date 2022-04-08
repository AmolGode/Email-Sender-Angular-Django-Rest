
from rest_framework.decorators import api_view
from rest_framework.response import Response

import smtplib
from validate_email_address import validate_email #first pip install validate-email-address and  pip install py3dns # Only for checking valid email Syntax

# Create your views here.

#connecting to server and login#
obj = smtplib.SMTP('smtp.gmail.com',587)
obj.ehlo()
obj.starttls()

sender_mail = 'example@gmail.com'
sender_password = 'Password@123'

obj.login(sender_mail, sender_password)
###

@api_view(['POST'])
def send_email(request):
    subject = request.data.get('subject')
    body = request.data.get('body')
    message = 'subject :{}\n\n{}'.format(subject,body) ##Adding subject and body into single variable . ##'subject : '+subject+'\n\n'+body

    receiver_list = []
    receiver_list.append(request.data.get('to'))

    is_valid_email = validate_email(request.data.get('to'))
    print('validate : ', is_valid_email)

    if is_valid_email :
        obj.sendmail(sender_mail,receiver_list,message)
        resp = {'code' : 1,'resp' : 'Mail sent successfully..!'}
    else:
        resp = {'code': 0 ,'resp' : 'To Email is not valid...!'}
    return Response(resp)



