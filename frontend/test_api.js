const axios = require('axios');
async function test() {
    try {
        const res = await axios.get('http://localhost:3333/api/leads', {
            headers: {
                Authorization: "Bearer fake-token-doesn't-matter"
            }
        });
        console.log("Success", Object.keys(res.data));
    } catch (err) {
        console.log("Error", err.response?.data);
    }
}
test();
