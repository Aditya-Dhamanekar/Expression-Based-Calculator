let a='';
let s='';
document.querySelector('#display').innerText='';
function one(){
if(s[0]!='0' || s.includes(".")){
	a+='1';
	s+='1';
}
document.querySelector('#display').innerText=a;
all();
}
function two(){
if(s[0]!='0' || s.includes(".")){
	a+='2';
	s+='2';
}
document.querySelector('#display').innerText=a;
all();
}
function three(){
if(s[0]!='0' || s.includes(".")){
	a+='3';
	s+='3';
}
document.querySelector('#display').innerText=a;
all();
}
function four(){
if(s[0]!='0' || s.includes(".")){
	a+='4';
	s+='4';
}
document.querySelector('#display').innerText=a;
all();
}
function five(){
if(s[0]!='0' || s.includes(".")){
	a+='5';
	s+='5';
}
document.querySelector('#display').innerText=a;
all();
}
function six(){
if(s[0]!='0' || s.includes(".")){
	a+='6';
	s+='6';
}
document.querySelector('#display').innerText=a;
all();
}
function seven(){
if(s[0]!='0' || s.includes(".")){
	a+='7';
	s+='7';
}
document.querySelector('#display').innerText=a;
all();
}
function eight(){
if(s[0]!='0' || s.includes(".")){
	a+='8';
	s+='8';
}
document.querySelector('#display').innerText=a;
all();
}
function nine(){
if(s[0]!='0' || s.includes(".")){
	a+='9';
	s+='9';
}
document.querySelector('#display').innerText=a;
all();
}
function dot(){
	let b=s.length-1;
	if(s.includes(".") || b<0){
		document.querySelector('#display').innerText=a;
	}
	else{
		s+='.';
		a+='.';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function zero(){
	let b=s.length-1;
	if(s[0]=='0'&& b==0)
	{
		document.querySelector('#display').innerText=a;
	}
	else {
	    s+='0';
	    a+='0';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function plus(){
	let b=a.length-1;
    if(isNaN(Number(a[b])))
	{
		document.querySelector('#display').innerText=a;
	}
	else{
		s='';
		a+='+';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function minus(){
let b=a.length-1;
    if(isNaN(Number(a[b])))
	{
		document.querySelector('#display').innerText=a;
	}
	else{
		s='';
		a+='-';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function mul(){
let b=a.length-1;
    if(isNaN(Number(a[b])))
	{
		document.querySelector('#display').innerText=a;
	}
	else{
		s='';
		a+='*';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function divide(){
let b=a.length-1;
    if(isNaN(Number(a[b])))
	{
		document.querySelector('#display').innerText=a;
	}
	else{
		s='';
		a+='/';
		document.querySelector('#display').innerText=a;
	}
	all();
}
function equal(){
	let b=eval(a);
	a='';
	s='';
	document.querySelector('#display').innerText=b;
	all();
}

function cancel(){
	a='';
	s='';
	document.querySelector('#display').innerText=a;
	all();
}

function remove(){
	let b=a.length-1;
	let c=s.length-1;
	s=s.slice(0,c);
	a=a.slice(0,b);
	if(c<=0)
		s="";
	if(b<=0)
		a="";
	document.querySelector('#display').innerText=a;
	all();
}

function all(){
	let display = document.querySelector('#display');
	display.scrollLeft = display.scrollWidth;
}