import $ from 'jquery';

var a = $('#a').text();

const promise = new Promise(res => {
    res(a);
})

promise.then(data => {
    alert(data);
})
