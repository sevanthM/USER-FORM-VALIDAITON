let err=false
let otp
let generateOtp = () => 
{
    return Math.floor(1000+Math.random()*9000)
}
let otpgen = (event) =>
{   
    otp = generateOtp()
    alert(`OTP is: ${otp}`)
}
let form = document.querySelector("form")
let usernameErr = document.getElementById("usernameErr")
let phnoErr = document.getElementById("phnoErr")
let phnoErr2 = document.getElementById("phnoErr2")
let dobErr= document.getElementById("dobErr")
let mailErr = document.getElementById("mailErr")
let pwdErr = document.getElementById("pwdErr")
let conpwdErr = document.getElementById("conpwdErr")
let conpwdErr2 = document.getElementById("conpwdErr2")
let otpbtn = document.getElementById("otpbtn")
let otpInput = document.getElementById("otpInput")
let otpErr = document.getElementById("otpErr")

    form.addEventListener("submit",(event) => {
    let uname = event.target.username.value
    let phnum = event.target.phno.value
    let dateofbirth = event.target.DOB.value
    let mail = event.target.email.value
    let pwd = event.target.password.value
    let conpwd = event.target.confirmpassword.value
    let otpinput = event.target.otppwd.value

    document.querySelectorAll("span[id$='Err']").forEach(span => span.style.display = "none");


    let ErrorDefault = false;

    if(uname==='')
    {
        usernameErr.style.display="inline"
        ErrorDefault=true
    }
    if(phnum==='')
    {
        phnoErr.style.display="inline"
        ErrorDefault=true
    }
    if(dateofbirth==='')
    {
        dobErr.style.display="inline"
        ErrorDefault=true
    }
    if(mail==='')
    {
        mailErr.style.display="inline"
        ErrorDefault=true
    }
    if(pwd==='')
    {
        pwdErr.style.display="inline"
        ErrorDefault=true
    }
    if(conpwd==='')
    {
        conpwdErr.style.display="inline"
        ErrorDefault=true
    }
    if(pwd!==conpwd)
    {
        conpwdErr2.style.display="inline"
        ErrorDefault=true
    }
    if(phnum && !/^[6-9][0-9]{9}$/.test(phnum)) 
    {
            phnoErr2.style.display = 'inline'
            ErrorDefault = true   
    }
    if(otpinput==='')
    {
            otpErr.style.display='inline'
            ErrorDefault = true
    }
    if(otpinput!==otp)
    {
            otpErr.style.display='inline'
            ErrorDefault = true
    }
    
    if (ErrorDefault) {
        event.preventDefault();
    } else {
        console.log('Form Submitted');
        console.log(`Username: ${uname}`);
        console.log(`Phone Number: ${phnum}`);
        console.log(`Date of Birth: ${dateofbirth}`);
        console.log(`Email: ${mail}`);
        console.log(`Password: ${pwd}`);
        console.log(`Confirm Password: ${conpwd}`);
        event.preventDefault()
    }   
})