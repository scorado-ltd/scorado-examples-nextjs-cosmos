echo '-| Scorado Cosmos |-'

cd .cosmos
npm install
npm run cosmos-export
mv ./public/cosmos-export ../public
npm run build