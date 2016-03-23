#!/bin/bash

echo 'running npm install - this might take awhile...'
npm install --no-progress
echo 'installing Redux CLI...' 
npm i redux-cli -g --no-progress 
sed -i 's/server_host : \x27localhost\x27/server_host : \x270.0.0.0\x27/g' config/_base.js 
sed -i 's/compiler_public_path: `.*`/compiler_public_path: \x27\/\x27/g' config/_development.js
