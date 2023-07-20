function hitungBMI(){
    let beratBadan = parseInt(document.getElementById('beratBadan').value);
    let tinggiBadan = parseInt(document.getElementById('tinggiBadan').value)/100;
    let usia = parseInt(document.getElementById('usia').value);
    let bmi = beratBadan / (Math.pow(tinggiBadan,2));
    let status="";
    let rasio = "";
    let kejelasan ="";
    if( beratBadan <0 || isNaN(beratBadan)) {
        alert( "Berat badan tidak boleh kurang dari 0" );
        return kejelasan == false;
     }
     if( tinggiBadan <0 || isNaN(tinggiBadan)) {
        alert( "Tinggi badan tidak boleh kurang dari 0" );
        return kejelasan == false;
     }
     if( usia <0 || isNaN(usia)) {
        alert( "Usia tidak boleh kurang dari 0" );
        return kejelasan == false;
     }

    if(bmi<18.5){
        status = "Berat Badan Kurang";
        rasio = "kurang dari 18.5";
        ket = "Anda berada dalam kategori unnderweight atau berat badan kurang";
        penjelasan ="Cara terbaik untuk menaikkan berat badan adalah dengan  mulai makan dengan gizi seimbang secara teratur";
        saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
    } else if(bmi>=18.5 && bmi<=24.9){
        status = "Berat Badan Normal";
        rasio = "diantara 18.5 - 24.9";
        ket = "Anda berada dalam kategori normal";
        penjelasan ="Anda hanya perlu terus menjaga pola makan dan menjalankan hidup sehat.";
        saran = "Anda harus mempertahankan BMI pada batas normal";
    } else if(bmi>24.9 && bmi<=29.9){
        status = "Berat Badan Lebih";
        rasio = "diantara 25 - 29.9";
        ket = "Anda berada dalam kategori overweight atau berat badan berlebih";
        penjelasan ="Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
        saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }else{
        status = "Berat Badan Kegemukan (Obesitas)";
        rasio = "lebih dari 30";
        ket = "Anda berada dalam kategori obesitas atau berat badan kegemukan";
        penjelasan ="Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
        saran = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }
    document.getElementById('nantihilang').style.display =  "none";
    if(kejelasan == false){
    document.getElementsByTagName('h2')[2].innerHTML= status;
    document.getElementsByTagName('p')[4].innerHTML = bmi.toPrecision(3);
    document.getElementsByTagName('p')[5].innerHTML = 'Anda Memiliki ' + status;
    const downloadhasil = document.getElementById('downloadhasil');
    downloadhasil.style.display = "block"; 
    document.getElementsByTagName('p')[6].innerHTML= 'Hasil BMI ' + rasio;
    document.getElementsByTagName('p')[7].innerHTML = ket;
    document.getElementsByTagName('p')[8].innerHTML = penjelasan;
    document.getElementsByTagName('p')[9].innerHTML = saran;
    document.getElementById('konsulgizi').style.display ="block";
    document.getElementById('registgizi').style.display ="block";
    document.getElementById('bmi2').style.display = "block";
    }
 
}

function formReset(){
    document.getElementById('tinggiBadan').value = "";
    document.getElementById('beratBadan').value = "";
    document.getElementById('usia').value = "";
    document.getElementById('pria').checked = false;
    document.getElementById('wanita').checked = false;
}

