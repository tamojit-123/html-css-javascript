//https://jsonplaceholder.typicode.com/todos/1
let xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/todos/1234");
xhr.send();

console.log(JSON.parse(xhr.response));
document.write(xhr.response);
document.write("<pre>${xhr.response}</pre>");


if (xhr.status === 200) {
    cosole.log(xhr.response);
} else {
    console.log("Error ${xhr.status}");
}

xhr.onerror = () => {
    console.log(xhr);
}

xhr.onload = function () {
    alert(`Loaded:${xhr.status} ${xhr.response}`);
};

xhr.onerror = function () {//only triggers if the request couldn't be made at all
    alert(`Network Error`);
};

xhr.onprogress = function (event) { // triggers periodically
    alert(`Received ${event.loaded} of ${event.total}`);
};
// =========================================


let xhr = new XMLHttpRequest();
xhr.open('GET', '/article/xmlhttprequest/example/load');
xhr.send();
xhr.onload = function () {
    if (xhr.status !== 200) alert(`Error ${xhr.status}: ${xhr.statusText}`);
    else alert(`Done, got ${xhr.response.length} bytes`);
};
xhr.onprogress = function (event) {
    if (event.lengthComputable) alert(`Received ${event.loaded} of ${event.total} bytes`);
    else alert(`Received ${event.loaded} bytes`);
};
xhr.onerror = function () {
    alert("Request failed");
};
// =============================================


var xhr = new XMLHttpRequest();
xhr.open("GET", "hello.txt", false);
xhr.send();
document.write(xhr.response); // writes 'hello' to document


var xhr = new XMLHttpRequest();
xhr.open("GET", "hello.txt");
xhr.send();
document.write(xhr.response); // empty string
// ======================================



