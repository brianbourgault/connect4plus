export default function getSearchParams(search) {
    const searchParams = search.substr(0); // redirect=u_AAAA&player=Red
    const paramsArr = searchParams.split("&");
    const params = {};
    paramsArr.forEach((pair) => {
        const [key, value] = pair.split("=");
        params[key] = key === "redirect" ? value.replace("_", "/") : value;
    });

    return params;
}
