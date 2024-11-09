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
}

refresh.addEventListener('click', refreshPage);