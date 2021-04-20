#!/bin/bash

git pull

for folder in johnturbo.com schoettner.rocks pure.schoettner.dev
do
    FILE="../$folder"
    if [ -d "$FILE" ]; then

        cd $FILE
        git pull
    fi
done