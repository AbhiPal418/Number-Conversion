function dec_to_bin(num) {
    return (num >>> 0).toString(2);
}
function bin_to_dec(bin_str) {
    return parseInt(bin_str, 2);
}
function dec_to_hex(num) {
    return num.toString(16);
}
function hex_to_dec(hex_str) {
    return parseInt(hex_str, 16);
}
function dec_to_oct(num) {
    return num.toString(8);
}
function oct_to_dec(oct_str) {
    return parseInt(oct_str, 8);
}
function bin_to_oct(bin_str) {
    let dec_num = bin_to_dec(bin_str);
    return dec_to_oct(dec_num);
}
function bin_to_hex(bin_str) {
    let dec_num = bin_to_dec(bin_str);
    return dec_to_hex(dec_num);
}
function oct_to_bin(oct_str) {
    let dec_num = oct_to_dec(oct_str);
    return dec_to_bin(dec_num);
}
function oct_to_hex(oct_str) {
    let dec_num = oct_to_dec(oct_str);
    return dec_to_hex(dec_num);
}
function hex_to_bin(hex_str) {
    let dec_num = hex_to_dec(hex_str);
    return dec_to_bin(dec_num);
}
function hex_to_oct(hex_str) {
    let dec_num = hex_to_dec(hex_str);
    return dec_to_oct(dec_num);
}
function string_to_num(str, base) {
    return parseInt(str, base);
}
 


let from = document.getElementById("from");
let to = document.getElementById("to");
let val = document.getElementById("val");

let from_val,to_val,input_val,result;

document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();

    from_val = e.target.from.value;
    to_val = e.target.to.value;
    input_val = e.target.val.value;

    if(from_val === "bin" && to_val === "dec"){
        result = bin_to_dec(input_val);
    }
    else if(from_val === "dec" && to_val === "bin"){
        result = dec_to_bin(Number(input_val));
    }
    else if(from_val === "hex" && to_val === "dec"){
        result = hex_to_dec(input_val);
    }
    else if(from_val === "dec" && to_val === "hex"){
        result = dec_to_hex(Number(input_val));
    }
    else if(from_val === "oct" && to_val === "dec"){
        result = oct_to_dec(input_val);
    }
    else if(from_val === "dec" && to_val === "oct"){
        result = dec_to_oct(Number(input_val));
    }
    else if(from_val === "bin" && to_val === "oct"){
        result = bin_to_oct(input_val);
    }
    else if(from_val === "bin" && to_val === "hex"){
        result = bin_to_hex(input_val);
    }
    else if(from_val === "oct" && to_val === "bin"){
        result = oct_to_bin(input_val);
    }
    else if(from_val === "oct" && to_val === "hex"){
        result = oct_to_hex(input_val);
    }
    else if(from_val === "hex" && to_val === "bin"){
        result = hex_to_bin(input_val);
    }
    else if(from_val === "hex" && to_val === "oct"){
        result = hex_to_oct(input_val);
    }
    else{
        result = input_val;
    }
    document.getElementById("res").innerText =  result;
});