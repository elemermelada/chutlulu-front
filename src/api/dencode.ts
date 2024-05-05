export const DencodeTextAPI = async (mode:string, value:string) => {
    let url = (window as any).server_url as string  // Wacky
    url += `&mode=${mode==="encode" ? 1 : 0}`
    const result = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({input: value}), // body data type must match "Content-Type" header
    })
    return result.text();
}