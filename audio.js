// ตรวจสอบว่า <audio> element มีอยู่แล้วหรือไม่
window.onload = function() {
    var audio = document.getElementById('background-music');
    
    // ถ้าไม่มี <audio> element ให้สร้างใหม่
    if (!audio) {
        audio = new Audio('30 Minute Timer Lofi.mp3');
        audio.id = "background-music";
        audio.autoplay = true;
        audio.loop = true;
        document.body.appendChild(audio); // เพิ่ม <audio> ลงใน body ของหน้า
    } else {
        // ถ้ามี <audio> อยู่แล้ว ให้เล่นต่อจากสถานะเดิม
        audio.play();
    }
};
