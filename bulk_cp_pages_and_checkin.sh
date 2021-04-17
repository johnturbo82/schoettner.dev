#!/bin/bash

git add ./src/templates ./src/pages
git commit -m "$1"
git push

for folder in johnturbo.com schoettner.rocks pure.schoettner.dev
do
    FILE="../$folder"
    if [ -d "$FILE" ]; then
        rm -rf "$FILE/src/templates"
        rm -rf "$FILE/src/pages"
        cp -r "./src/templates" "$FILE/src"
        cp -r "./src/pages" "$FILE/src"

        cd $FILE
        git add ./src/templates ./src/pages
        git commit -m "$1"
        git push
    fi
done