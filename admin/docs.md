npm install -g sequelize-cli

sequelize init --migrations-path db/migrations --models-path app/models --url postgres://adam@localhost:5432/cove_dev

sequelize model:create --name User --attributes "username:string, password:string, email:string, firstname:string, lastname:string"

sequelize db:migrate

sudo npm install sequelize-cli -g

sudo npm install -g pg
