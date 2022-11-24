var axios = require("axios");
var FormData = require("form-data");
var data = new FormData();
data.append("grant_type", "client_credentials");
data.append("client_id", "7CusYRe5DAHjLCBkpKEi1V8mo2T38cCNp4Thh46k");
data.append(
  "client_secret",
  "0GrsSCDEraFpqcCZ2iRqzaBFyjkktAoIN3jNbWOR9tmdYgghNtkUQzwOUqkdfmhAki7j8FBPc7jFi4FLAikgp65Q3k6re7YpbEPdiuHNXcRsqaib1IrARDUlFd3hNxbA"
);

var config = {
  decompress: false,
  method: "post",
  url: "https://api.instamojo.com/oauth2/token/",
  headers: {
    "Accept-Encoding": "identity",
    ...data.getHeaders(),
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(response.headers["content-encoding"]);
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
