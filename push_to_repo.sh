#!/bin/bash
Echo "git push to repo and git ftp push to server";
git add .
read -p "Commit description: " desc
git commit -m "$desc"
git push origin master
