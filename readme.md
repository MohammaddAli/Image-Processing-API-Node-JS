# Udacity Image Processing API Project 

this is an API for processing images by resizing it using **Sharp Module** and **Node js , Express js , NPM and Jasmine for testing**

## The scripts used to start/build/test the application
>> - npm run start
>> - npm run build
>> - npm run test
>> - npm run prettier
>> - npm run lint
>> - npm run jasmine

## Different enpoints that could be accssed
* The valid endpoint URL is http://localhost:3000/api/image?name=**fileName**&width=**width**&height=**height**
* replace fileName with one of the accepted file names wich are : [encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica]
* replace width and height with positive numbers ' >0 '
* any invalid URL will result into an error message that wil send to user
* example of invalid URL :
* >> - http://localhost:3000/api/image?name=icelandwaterfall&width=720&height=520
* example of invalid URLs : http://localhost:3000/api/image?name=anyl&width=720&height=520     { meaasge: Input file is missing: ./images/anyl.jpg }
* http://localhost:3000/api/image?name=icelandwaterfall&width=0&height=520     { message: Expected positive integer for width but received 0 of type number }
* http://localhost:3000/api/image?name=icelandwaterfall&width=720&height=-500     { meaasge: Expected positive integer for height but received -500 of type number }
  

  ## Notes 
1. i added image existing condition to use cache to restore image thas has already resized with the same sizes 
2. prettier and lint are used and no errors
3. methods and endpoints are tested by jasmine and they are passed with no failures
4. server start with no issues 
5. i used the appropriate dependencies , packages and files structure


Developed by : *Muhammad Ali*