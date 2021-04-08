#!/bin/bash
rm -rf ../jt1.rocks/src/common
cp -r ./src/common ../jt1.rocks/src

git add ./src/common
git commit -m "$1"
git push

cd ../jt1.rocks
git add ./src/common
git commit -m "$1"
git push

