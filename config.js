module.exports = {
    Server: {
        PORT: process.env.PORT || 3000
    },
    Database: {
        user: 'postgres',
        password: 'admin',
        host: '127.0.0.1',
        port: '5432',
        db_name: 'tasks',
        tb_name: 'tasks'
    }
}