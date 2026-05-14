export function getContentType(ext){

    const types = {

        ".html": "text/html",

        ".css": "text/css",

        ".js": "text/javascript",

        ".json": "application/json",

        ".png": "image/png",

        ".jpg": "image/jpeg",

        ".jpeg": "image/jpeg",

        ".gif": "image/gif",

        ".svg": "image/svg+xml",

        ".webp": "image/webp",

        ".ttf": "font/ttf"
    }

    return types[ext.toLowerCase()] || "text/plain"
}