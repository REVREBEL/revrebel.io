_spf.google.com


revrebel.io. 3600 IN SPF "v=spf1 mx ip4:172.105.151.52 ip4:194.195.212.161 ip4:194.195.210.140 ip6:2600:3c02::f03c:93ff:fe97:0d59 ip6:2600:3c02::f03c:93ff:fecc:5e86 ip6:2600:3c02::f03c:93ff:feae:cdba include:_spf.google.com include:_spf.firebasemail.com include:72kjd6f.bookings.cs include:zohohost.com include:proxy-ssl.webflow.com include:zcsend.net include:mail.zohoanalytics.com include:one.zoho.com -all"
revrebel.io. 3600 IN TXT "v=spf1 mx ip4:172.105.151.52 ip4:194.195.212.161 ip4:194.195.210.140 ip6:2600:3c02::f03c:93ff:fe97:0d59 ip6:2600:3c02::f03c:93ff:fecc:5e86 ip6:2600:3c02::f03c:93ff:feae:cdba include:_spf.google.com include:_spf.firebasemail.com include:72kjd6f.bookings.cs include:zohohost.com include:proxy-ssl.webflow.com include:zcsend.net include:mail.zohoanalytics.com include:one.zoho.com -all"

include:proxy-ssl.webflow.com 
include:mail.revrebel.io
include:zohohost.com


ZOHO ONE INCLUDES:
include:zcsend.net 
include:mail.zohoanalytics.com include:_spf.firebasemail.com

include:proxy-ssl.webflow.com include:mail.revrebel.io include:72kjd6f.bookings.cs include:zohohost.com 
include:72kjd6f.bookings.cs mx ip4:172.105.151.52 ip4:194.195.212.161 ip4:194.195.210.140 ip6:2600:3c02::f03c:93ff:fe97:0d59 ip6:2600:3c02::f03c:93ff:fecc:5e86 ip6:2600:3c02::f03c:93ff:feae:cdba 


v=spf1 include:_spf.google.com  include:_spf.mailersend.net include:one.zoho.com include:sendgrid.net  -all