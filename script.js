const q1 = [
    "Who is Jigoro Kano and what important event took place in May of 1882 that was related to him?",
    "How did Jigoro Kano’s background help develop the creation of Judo?",
    "What was the meaning of 'Kodokan', the school opened by Jigoro Kano, and what was its purpose?",
    "What does the word waza stand for?",
    "What is the main differentiator between the practice of Judo and the practice of Jiu Jitsu?"
];

const q2 = [
    "As established by the International Judo Federation, what helped define the highly codified and ethical approach to combat? (Hint: there are 8 of them)",
    "When and where did judo debut at the Olympic Games?",
    "What are the key philosophical, intellectual, and physical principles that Judo has preserved through its journey of becoming an Olympic Sport? (Hint: there are four of them)",
    "What is the significance of the term Do in Ju-Do?",
    "To which main principle does the phrase 'minimal effort to gain maximum efficiency' apply?"
];

const q3 = [
    "What is the relationship between a Tori and an Uke?",
    "A grip taken on the lapel or collar for lifting or power action is called __________.",
    "What is ukemi and what is its purpose?",
    "A shuffling walking style where the first stepping leg always stays ahead, dragging the second foot in a trailing movement, is called __________.",
    "What are the three styles of Judo, and what do they mean?"
];

const q4 = [
    "What is the difference between Nage-no-kata and Katame-no-kata?",
    "What does IJC stand for and what year did it become a member dojo of USA Judo?",
    "What words will a referee loudly announce to start and end a Judo match?",
    "What is the purpose of bowing?",
    "Besides Judo, what does IJC Martial Arts strive to teach its students?"
];

const Ukemi = [
    "Mae-ukemi",
    "Ushiro-ukemi",
    "Yoko-ukemi",
    "Mae-mawari-ukemi"
];

const TaiSabaki = [
    "Mae-sabaki",
    "Ushiro-sabaki",
    "Mae-mawari-sabaki",
    "Ushiro-mawari-sabaki"
];

const Movement = [
    "Ayumiashi",
    "Tsugiashi",
];

const Grip = [
    "Hiki-te",
    "Tsurite"
];

const Stance = [
    "Ai-Yotsu",
    "Kenka-Yotsu"
];

const Tewaza = [
    "Seoi Nage", 
    "IpponSeoi Seoi Nage", 
    "Tai Otoshi", 
    "Sei Otoshi", 
    "Uki Otoshi", 
    "Sumi Otoshi"];

const Koshiwaza = [
    "Uki Goshi", 
    "O Goshi", 
    "Koshi Guruma", 
    "Tsurikomi Goshi", 
    "Tsuri Goshi", 
    "Sode Tsurikomi Goshi", 
    "Harai Goshi"];

const Ashiwaza = [ 
    "Okuri Ashi Harai", 
    "De Ashi Harai", 
    "Sasai Tsurikomi Ashi", 
    "Osoto Gari", 
    "Osoto Guruma", 
    "Hiza Guruma", 
    "O Uchi Gari", 
    "Kouchi Gari", 
    "Kosoto Gari"];

const MaSutemiwaza = ["Tomoe Nage", "Sumi Gaeshi", "Hikikomi Gaeshi"];

const YokoSutemiwaza = [
    "Yoko Otoshi", 
    "Yoko Guruma", 
    "Yoko Gake", 
    "Tani Otoshi", 
    "Soto Makikomi", 
    "Uchi Makikomi", 
    "Uki Waza", 
    "Kouchi Makikomi"];

const Osaekomiwaza = [
    "Kesa Gatame", 
    "Kuzure Kesa Gatame", 
    "Kata Gatame", 
    "Kami Shiho Gatame", 
    "Kuzure Kami Shiho Gatame", 
    "Yoko Shiho Gatame", 
    "Tate Shiho Gatame", 
    "Ushiro Kesa Gatame"
];

const Shimewaza = [
    "Nami Juji Jime", 
    "Gyaku Juji Jime", 
    "Kata Juji Jime", 
    "Hadaka Jime", 
    "Okuri Eri Jime", 
    "Kataha Jime", 
    "Sode Guruma Jime", 
    "Sankaku Jime"
];

const Kansetsuwaza = [
    "Ude Garami", 
    "Ude Gatame", 
    "Juji Gatame", 
    "Sankaku Gatame", 
    "Waki Gatame", 
    "Te Gatame", 
    "Hara Gatame", 
    "Ashi Gatame", 
    "Hiza Gatame"
];

function getRandom(arr){
    const randomI = Math.floor(Math.random() * arr.length);
    return arr[randomI];
}

function displayTest(){
    document.getElementById("q1").textContent += getRandom(q1);
    document.getElementById("q2").textContent += getRandom(q2);
    document.getElementById("q3").textContent += getRandom(q3);
    document.getElementById("q4").textContent += getRandom(q4);
    document.getElementById("ukemi").textContent += getRandom(Ukemi);
    document.getElementById("taiSabaki").textContent += getRandom(TaiSabaki);
    document.getElementById("movement").textContent += getRandom(Movement);
    document.getElementById("grip").textContent += getRandom(Grip);
    document.getElementById("stance").textContent += getRandom(Stance);
    document.getElementById("tewaza").textContent += getRandom(Tewaza);
    document.getElementById("Koshi").textContent += getRandom(Koshiwaza);
    document.getElementById("Ashi").textContent += getRandom(Ashiwaza);
    document.getElementById("Ma").textContent += getRandom(MaSutemiwaza);
    document.getElementById("Yoko").textContent += getRandom(YokoSutemiwaza);
    document.getElementById("Oseakomi").textContent += getRandom(Osaekomiwaza);
    document.getElementById("Shime").textContent += getRandom(Shimewaza);
    document.getElementById("Kansetsu").textContent += getRandom(Kansetsuwaza);
}


document.addEventListener("DOMContentLoaded", displayTest);

const refresh = document.querySelector('.refresh');
const refreshPage = () => {
    location.reload();
    window.scrollTo(0, 0);
}

refresh.addEventListener('click', refreshPage);
