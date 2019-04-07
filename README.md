First clone this repository 

Create a database on your server's mysql 

I named mine ionicdb with a table users, the fields are according to the requirements; fields like:
id,username,password,telephone,email,program_name, citizenship etc. We later fill in this fields using a CSV upload function.

Put the ionicphp files on the server, change the dbconnect.php details to your database details if you haven't named/set them

cd into ionic-app and do npm install as I haven't uploaded node_modules on this repo
ionic-app expects the site with the php files to be named http://ionicphp.test

You will need to change the urls inside ionic-app to your own domain names in order for the application to be able to reach your php files

Then you can do ionic serve from ionic-app folder and test the functionality 
or build your android/ios apps according to ionics documentation

You can also model the app in Ionic Dev


http://127.0.0.1/ionicphp/
