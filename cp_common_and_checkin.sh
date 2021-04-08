#!/bin/bash

git add ./src/common
git commit -m "$1"
git push

FILE=../jt1.rocks
if [ -d "$FILE" ]; then
    rm -rf ../jt1.rocks/src/common
    cp -r ./src/common ../jt1.rocks/src


    cd ../jt1.rocks
    git add ./src/common
    git commit -m "$1"
    git push
fi

FILE=../johnturbo.com
if [ -d "$FILE" ]; then
    rm -rf ../johnturbo.com/src/common
    cp -r ./src/common ../johnturbo.com/src


    cd ../johnturbo.com
    git add ./src/common
    git commit -m "$1"
    git push
fi

FILE=../schoettner.org
if [ -d "$FILE" ]; then
    rm -rf ../schoettner.org/src/common
    cp -r ./src/common ../schoettner.org/src


    cd ../schoettner.org
    git add ./src/common
    git commit -m "$1"
    git push
fi

FILE=../schoettner.dev
if [ -d "$FILE" ]; then
    echo "Working on"
    rm -rf ../schoettner.dev/src/common
    cp -r ./src/common ../schoettner.dev/src


    cd ../schoettner.dev
    git add ./src/common
    git commit -m "$1"
    git push
fi