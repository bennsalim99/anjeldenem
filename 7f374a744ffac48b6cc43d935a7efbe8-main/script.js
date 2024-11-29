let angle = 0;
let spinButton;
let isSpinning = false;

const services = [
    { name: "Cilt Bakımı", detail: "Profesyonel cilt bakımı ile cildinizi tazeleyin ve canlandırın." },
    { name: "Saç Bakımı", detail: "Saçlarınıza özen gösterin, sağlıklı ve parlak saçlara sahip olun." },
    { name: "Manikür & Pedikür", detail: "Uzman manikür ve pedikür hizmeti ile elleriniz ve ayaklarınız pırıl pırıl." },
    { name: "Vücut Masajı", detail: "Rahatlatıcı masajlarla vücudunuzu yenileyin ve stresinizi azaltın." },
    { name: "Tüy Alma", detail: "Profesyonel tüy alma işlemleri ile pürüzsüz bir cilt." },
    { name: "Makyaj", detail: "Özel makyaj teknikleriyle güzelliğinizi vurgulayın." }
];

let currentSegment = 0;

function setup() {
    createCanvas(400, 400);
    spinButton = select('#spin-btn');
    spinButton.mousePressed(startSpin);
}

function draw() {
    background(255);

    // Çarkı çiz
    translate(width / 2, height / 2);
    rotate(angle);

    let angleStep = TWO_PI / services.length;

    for (let i = 0; i < services.length; i++) {
        fill(i % 2 === 0 ? "#FF6347" : "#FFD700");
        arc(0, 0, 300, 300, i * angleStep, (i + 1) * angleStep, PIE);
    }

    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    for (let i = 0; i < services.length; i++) {
        push();
        rotate(i * angleStep + angleStep / 2);
        text(services[i].name, 0, -150);
        pop();
    }
}

function startSpin() {
    if (isSpinning) return;
    isSpinning = true;
    let spinAngle = random(PI, TWO_PI * 2);
    angle += spinAngle;
    currentSegment = Math.floor(map(angle % TWO_PI, 0, TWO_PI, 0, services.length));

    setTimeout(() => {
        displayService(currentSegment);
        isSpinning = false;
    }, 3000);
}

function displayService(index) {
    const serviceInfo = services[index];
    document.getElementById('service-detail').innerHTML = serviceInfo.detail;
}
