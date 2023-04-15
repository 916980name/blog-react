
async function AnalyticsBlock(props) {

    if (process.env.NODE_ENV === 'development') {
        // Do nothing
        return
    } else {
        await initGoogle('https://www.googletagmanager.com/gtag/js?id=G-QZEYV245XL')
    }
}

function initGoogle(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.head.appendChild(script);
        const script2 = document.createElement('script');
        script2.textContent = 'window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); gtag("config", "G-QZEYV245XL"); '
        document.head.appendChild(script2);
    });
}

export default AnalyticsBlock;