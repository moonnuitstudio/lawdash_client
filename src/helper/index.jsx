export const fixLocationString = url => {
    if (url == "/") return "dashboard"

    return url.replace("/", "")
}