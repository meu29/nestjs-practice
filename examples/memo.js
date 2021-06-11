var axios = require("axios");

async function fetch(url, type, body = {}) {

    try {
        if (type == "GET") {
            var res = await axios.get(url);
        } else if (type == "POST") {
            var res = await axios.post(url, body);
        } else if (type == "DELETE") {
            var res = await axios.delete(url, {data: body});
        } else if (type == "PUT") {
            var res = await axios.put(url, {data: body});
        }
        console.log(res.data);
    } catch(err) {
        console.log(err.response.status, err.response.statusText);
    }
    
}

(async () => {
    await fetch("http://localhost:8000/api/memo?userId=1", "GET");
    await fetch("http://localhost:8000/api/memo", "POST", {userId: 1, title: "テストメモ", content: "これはテストメモです", date: new Date()});
    await fetch("http://localhost:8000/api/memo?userId=1", "GET");
    //await fetch("http://localhost:8000/api/memo", "DELETE", {memo_id});
    //await fetch("http://localhost:8000/api/memo?userId=1", "GET");
    await fetch("http://localhost:8000/api/memo/all", "DELETE", {userId: 1});
    await fetch("http://localhost:8000/api/memo?userId=1", "GET");
})();