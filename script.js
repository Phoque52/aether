const infoBox = document.getElementById('infoBox');

const infoMessages = [
    "Aether'ın içerisinde 6'dan fazla easter egg bulunmaktadır.",
  
    "Atatürk, Türkiye Cumhuriyeti'nin kurucusu olarak 29 Ekim 1923'te Cumhuriyet'i ilan etti."

    "Kurtuluş Savaşı, 1919 yılında Samsun’a çıkarak işgallere karşı başlatılan bir direniş hareketidir."

    "Mustafa Kemal Atatürk, 16 Mart 1920’de Türkiye Büyük Millet Meclisi’ni Ankara'da topladı."

    "Kurtuluş Savaşı, Türk milletinin bağımsızlık için verdiği savaşın adıdır."

    "Kurtuluş Savaşı’nda, Türkiye’nin çeşitli cephelerinde İngiliz, Fransız, Ermeni ve Yunan işgaline karşı savaşlar yapıldı."

    "Aether'ın ilk adı İnkılapBot'du."

    "Aether ilk sürümlerinde Facebook üzerinden çalışıyordu."

    "Kurtuluş Savaşı'nın zaferle sonuçlanmasının ardından, 1923’te Lozan Antlaşması imzalanarak Türkiye’nin bağımsızlığı uluslararası alanda kabul edildi."

    "Aether ismi Dante Aligheri'nin "İlahi Komedya"sındaki gök katlarından esinlenilerek verilmiştir."
];


function getRandomInfo() {
    const randomIndex = Math.floor(Math.random() * infoMessages.length);
    return infoMessages[randomIndex];
}


window.onload = function() {
    infoBox.innerHTML = getRandomInfo();


    setInterval(() => {
        infoBox.innerHTML = getRandomInfo();
    }, 10000);
};
