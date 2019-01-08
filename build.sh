#!/bin/bash

cml build

#scp -r ./dist/weex/* ./dist/web/* xiaoju@10.179.100.193:/home/xiaoju/webroot/

didiup -d ./dist -r '**/*.*'  -c cml-playground