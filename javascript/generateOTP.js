function generateOTP() {
    var digit = '0123456789';
    let OTP = '';
    for(let i=0;i<6;i++){
        OTP+=digit[Math.floor(Math.random()*10)];
    }
    console.log(OTP);
    return OTP;
}
generateOTP();