#!/bin/bash

git add ./src/templates ./src/pages
git commit -m "$1"
git push

FILE=../schoettner.rocks
if [ -d "$FILE" ]; then
    rm -rf ../schoettner.rocks/src/templates
    rm -rf ../schoettner.rocks/src/pages
    cp -r ./src/templates ../schoettner.rocks/src
    cp -r ./src/pages ../schoettner.rocks/src


    cd ../schoettner.rocks
    git add ./src/templates ./src/pages
    git commit -m "$1"
    git push
fi

FILE=../johnturbo.com
if [ -d "$FILE" ]; then
    rm -rf ../johnturbo.com/src/templates
    rm -rf ../johnturbo.com/src/pages
    cp -r ./src/templates ../johnturbo.com/src
    cp -r ./src/pages ../johnturbo.com/src


    cd ../johnturbo.com
    git add ./src/templates ./src/pages
    git commit -m "$1"
    git push
fi