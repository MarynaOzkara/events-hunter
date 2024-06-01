const { MONGODB_URL } =process.env

export default () => ({
    database: {
        url: MONGODB_URL
    }
})