localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

every request from the client has a pair of {request,response}

npm - node package manager
used to install, run, uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
package.json holda all the information realted to install
package for npm
- update package.json,set type ='module'
- it also creates a folder node_modules automatically
- node_modules holds the package/Library files
- generally we ignore the node_modules by .gitignore

Nodemon - it restart the server automatically when file changes,to install
> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to execute any program,update the package.json file then start server as
  <b>npm run dev</b>
 - start -> it will execute the app on deployement
 - dev-> it will start server in development phase (only for devloper)
 - res: it will return content (json/html/plain) to the user/client
 - req : it will retrive the information from client to the server
 - server send also statuscode to the client ,that  he error / succes massage
 # Status Codes
       - 200 -> ok
       - 201 -> Created
       - 400 -> Bad request
       - 401 ->  Unauthorised
       - 403 -> forbidden
       - 404 -> not found
       - 500 -> internal server error

       # content type
       - text/ plain
       - text/html
       - application/json
       - text / css
       the content type and status code can be  send back to  client by two ways
       1. res.writehread
       2. res.setheader
       3. res.statuscode
## send html file to client
       1. res.end
          end("any html content/tag")
      2. html file
          - read by createReadstream
          - pipe with res object
## JSON (JAVA SCRIPT OBJECT NOTATION)
  - server return data only not html content because html content will be retain by front end developer.The data is in json format.
  - json always store datya in key value pair enclosed by {} bracket array casn stored by[].one pair of { } will reprtesent one object and its property seperated by ,
  ``` {
  id:1,
  name:'mobile',
  price:40000,
  rating:4,
  reviews:400,

  }
## Headers
  it is used to tell client the type of data send by the server it may be html files,json data,plain text file
  css file any tokens{for login}
  1.tesxt/plain->text file
  2.text/html->html content/file
  3.application/json-> json content/file
  4.text/css->stylesheet
  5.application/form-data->for uploadind file
  6.application/auth->for tokens
  GET
- no parameter will pass to the server when we recieve all items.
POST
- to ad record we pass the value from body section in json format of api tester(echo api).
DELETE
- to delete any product we pass parameter that is id of the product from url.
UPDATE
- to update any product we pass id from url and data to update from body.