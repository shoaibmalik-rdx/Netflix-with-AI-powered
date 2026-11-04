
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-08-21/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/4263c437-c678-4724-ad80-e3ba0dc8761e/web/IN-en-20260921-TRIFECTA-perspective_95810136-2c4a-4ab4-a323-50418521e261_small.jpg"
export const USER_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiJKMksPDVHkBTk5lSyUGhnzQeIR65FyMW3Z1j5EtJQ&s=10"

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} ` 
    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original"

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "हिंदी" },
    { identifier: "spanish", name: "Española" },
    { identifier: "arabic", name: "عربي" },
    { identifier: "chinese", name: "中国人" },
    { identifier: "french", name: "française" },
    { identifier: "italian", name: "tedesco" },
    { identifier: "portuguese", name: "alemão" },
    { identifier: "japanese", name: "한국인" },
    { identifier: "russian", name: "корейский" },
    { identifier: "tamil", name: "தமிழ்" },
    { identifier: "telugu", name: "తెలుగు" },
    { identifier: "german", name: "Deutsch" },

]


