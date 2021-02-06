if [ $ENVIRONMENT = "dev" ]
then
  npm install
  npm run startDev
else
  npm install --production
  npm run start
fi
