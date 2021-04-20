#!/bin/bash

git add .
git commit -m "$1"
git push

for folder in johnturbo.com schoettner.rocks
do
    FILE="../$folder"
    if [ -d "$FILE" ]; then
        cd $FILE
        git add .
        git commit -m "$1"
        git push
    fi
done