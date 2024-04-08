

//taking relative path with base url of website -> and make absolute path
export const getImageUrl=(path)=>{
    return new URL(`/assets/${path}`, import.meta.url).href;
}