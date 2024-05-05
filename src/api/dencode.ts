export const DencodeTextAPI = async (mode:string, value:string) => {
    let url = (window as any).server_url as string  // Wacky
    url += `&mode=${mode==="encode" ? 1 : 0}&input=${value}`
    const result = await fetch(url)
    return result.text();
}