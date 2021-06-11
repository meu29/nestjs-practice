var axios = require("axios");

async function fetch(url, body) {

    try {
        var res = await axios.post(url, body);
        console.log(res.data);
    } catch(err) {
        console.log(err.response.status, err.response.statusText);
    }
    
}

(async () => {
    await fetch("http://localhost:8000/api/user/login", {email: "haruka064@llmecidpat.tqabi.ghi", password: "cxrUDhCL"});
    await fetch("http://localhost:8000/api/user/signup", {name: "マイケル・ジャクソン", email: "test1@gmail.com", password: "abcdefg"});
    await fetch("http://localhost:8000/api/user/login", {email: "test1@gmail.com", password: "abcdefg"});
})();
