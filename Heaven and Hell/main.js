const selectors = {
    section: 'section.main',
    mode: 'section.main .mode',
    title: 'section.main #title',
    clouds: 'section.main .clouds img'
}

const mode = document.querySelector(selectors.mode);
const section = document.querySelector(selectors.section);
const title = document.querySelector(selectors.title);
const clouds = document.querySelector(selectors.clouds);

const DARK_MODE = 'hell';
const LIGHT_MODE = "heaven";

const getCurrentMode = () => {
    let currentMode = null;
    if (section.classList.contains(LIGHT_MODE)) {
        currentMode = LIGHT_MODE;
    } else if (section.classList.contains(DARK_MODE)) {
        currentMode = DARK_MODE;
    }
    return currentMode;
}

const toggleTitle = () => {
    const current = getCurrentMode();

    title.innerText = current===DARK_MODE ? 'heaven' : (current===LIGHT_MODE? 'hell' : null);

}

const toggleMainClass = () => {
    const current = getCurrentMode();

    section.classList.remove(LIGHT_MODE, DARK_MODE);
    section.classList.add(current === LIGHT_MODE ? DARK_MODE : (current === DARK_MODE ? LIGHT_MODE : null));

}

const toggleClouds = () => {
    const current = getCurrentMode();
    const regex = /img\/(heaven|hell)/;
    const newSrc = `img/${current}`;

    clouds.forEach((img) => {
        const imgSrc = img.src.replace(regex, newSrc);
        img.src = imgSrc;
    })
}

const toggleMode = (e) => {
    toggleTitle();
    toggleMainClass();
    toggleClouds();
}

mode.addEventListener("click", toggleMode)