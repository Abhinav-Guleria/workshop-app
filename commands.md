## To create package.json (Node.js project creation)
npm init -y

## To install a package from npmjs.com
npm i package-name  
Example: npm i http-server

## Writing a start script
In package.json add under "scripts" section  
"start": "http-server"

## To run a script from command line
npm run script-name  
Example: npm run start  
_Note_: Some scripts like start script have special status and do not require "run"