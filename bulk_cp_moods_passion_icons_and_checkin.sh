#!/bin/bash

git add ./src/images/moods ./src/images/passion ./src/images/social_icons
git commit -m "$1"
git push

for folder in johnturbo.com schoettner.rocks
do
    FILE="../$folder"
    if [ -d "$FILE" ]; then
        rm -rf "$FILE/src/images/moods"
        rm -rf "$FILE/src/images/passion"
        rm -rf "$FILE/src/images/social_icons"
        cp -r "./src/images/moods" "$FILE/src/images"
        cp -r "./src/images/passion" "$FILE/src/images"
        cp -r "./src/images/social_icons" "$FILE/src/images"


        cd $FILE
        git add ./src/images/moods ./src/images/passion ./src/images/social_icons
        git commit -m "$1"
        git push
    fi
done