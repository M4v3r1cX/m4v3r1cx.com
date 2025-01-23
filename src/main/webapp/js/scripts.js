const adjectives = ['awesome', 'bored', 'tired', 'smart', 'funny', 'loud', 'punk', 'asshole', 'idiotic', 'embarassing', 'wholesome', 'destroyed', 'lost', 'googled', 'anti-ChatGPT', 'gay', 'LGBT', 'undefined'];  
const subtitles = ['Nothing is True, Everything is Permited.', 'Don\'t take me too seriously or you\'ll go mad.', 'howdoyouturnthison','All of your base are belong to us.', 'I am Error', 'undefined', 'OH MY GOD JC, A BOMB!', 'WHEN I WAS... A YOUNG BOY... MY FATHER... TOOK ME INTO THE CITY... TO SEE A MARCHING BAND...', 'Not an original bone on my body.', 'Obviously based on The Monospace Web.', 'I hate Vanilla Javascript, that\'s why I used it on this site. It\'s a monument to my hubris.', 'Allons-y!', 'I miss the pre-smart phone era.', 'HACK THE PLANET', 'Estudiar en el Inacap fue la raja. Me gradué con un juego que enseñaba SQL. Fui el 2do en graduarse con un juego. El primero fue profe de progra mío.', 'God is punishing me for my hubris, and my work is never finished.', 'Pistantrophobia is a word, I swear.', 'Not good at naming stuff.'];

document.addEventListener("DOMContentLoaded", function(event) {
    const adjective = document.getElementById("adjective");
    adjective.innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];

    const subtitle = document.getElementById("subtitle");
    subtitle.innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
});