#!/bin/bash

git add ./src/common
git commit -m "$1"
git push

FILE=../johnturbo.com
if [ -d "$FILE" ]; then
    rm -rf ../johnturbo.com/src/common
    cp -r ./src/common ../johnturbo.com/src


    cd ../johnturbo.com
    git add ./src/common
    git commit -m "$1"
    git push
fi

FILE=../schoettner.rocks
if [ -d "$FILE" ]; then
    echo "Working on"
    rm -rf ../schoettner.rocks/src/common
    cp -r ./src/common ../schoettner.rocks/src


    cd ../schoettner.rocks
    git add ./src/common
    git commit -m "$1"
    git push
fi