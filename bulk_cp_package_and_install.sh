#!/bin/bash


git add ./package.json ./package-lock.json
git commit -m "$1"
git push

for folder in johnturbo.com schoettner.rocks pure.schoettner.dev
do
    
    FILE="../$folder"
    if [ -d "$FILE" ]; then
        rm -f "$FILE/package.json"
        cp "./package.json" "$FILE"

        cd $FILE
        npm install
        git add ./package.json ./package-lock.json
        git commit -m "$1"
        git push
    fi
done