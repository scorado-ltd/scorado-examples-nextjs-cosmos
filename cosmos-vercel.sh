echo '-| Scorado Cosmos |-'

cd .cosmos
npm run cosmos-export
mv ./public/cosmos-export ../public
npm run build