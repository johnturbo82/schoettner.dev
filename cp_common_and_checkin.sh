#!/bin/bash

git add ./src/common
git commit -m "$1"
git push

for folder in johnturbo.com schoettner.rocks
do
    FILE="../$folder"
    if [ -d "$FILE" ]; then
        rm -rf "$FILE/src/common"
        cp -r "./src/common" "$FILE/src"

        cd $FILE
        git add ./src/common
        git commit -m "$1"
        git push
    fi
done