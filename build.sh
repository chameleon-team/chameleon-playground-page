#!/bin/bash

cml build
cp ./res/* ./dist/
#scp -r ./dist/weex/* ./dist/web/* xiaoju@10.179.100.193:/home/xiaoju/webroot/

# 使用didiup工具上传文件到线上cml-playground文件夹，didiup使用说明查看http://npm.xiaojukeji.com/package/@didi/didi-uploader
didiup -d ./dist -r '**/*.*'  -c cml-playground