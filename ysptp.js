import { Readable } from 'node:stream'
import dns from "dns"
import http from 'http'
import fetch from 'node-fetch'


const hostMapping = {
    "cache.ott.ystenlive.itv.cmvideo.cn": "feiyangdigital.tg.ystenlive.ottdns.com",
    "cache.ott.bestlive.itv.cmvideo.cn": "feiyangdigital.tg.bestlive.ottdns.com",
    "cache.ott.wasulive.itv.cmvideo.cn": "feiyangdigital.tg.wasulive.ottdns.com",
    "cache.ott.fifalive.itv.cmvideo.cn": "feiyangdigital.tg.fifalive.ottdns.com",
    "cache.ott.hnbblive.itv.cmvideo.cn": "feiyangdigital.tg.hnbblive.ottdns.com",
}

const ysProgram = {
    "cctv1.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv1.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv2.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv2.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv3.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv3.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv4.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv4.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv5.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv5.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv5p.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv5p.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv6.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv6.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv7.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv7.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv8.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv8.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv9.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv9.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv10.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv10.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv11.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv11.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv12.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv12.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv13.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv13.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv14.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv14.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv15.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv15.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv16.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv16.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv17.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv17.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtnar.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtnar.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtndoc.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtndoc.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtnen.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtnen.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtnfr.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtnfr.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtnru.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtnru.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cgtnsp.m3u8": "http://liveali-tpgq.cctv.cn/live/cgtnsp.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv4k.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv4k.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv4k_10m.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv4k10m.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv4k16.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv4k16.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv4k16_10m.m3u8": "http://liveali-tpgq.cctv.cn/live/cctv4k1610m.m3u8,http://liveali-tpgq.cctv.cn/live/",
    "cctv8k_36m.m3u8": "http://liveali-tp4k.cctv.cn/live/4K36M/playlist.m3u8,http://liveali-tp4k.cctv.cn/live/4K36M/",
    "cctv8k_120m.m3u8": "http://liveali-tp4k.cctv.cn/live/8K120M/playlist.m3u8,http://liveali-tp4k.cctv.cn/live/8K120M/",
}


const staticLookup = async (hostname, opts, cb) => {
    const host = hostMapping[hostname] || hostname
    dns.lookup(host, opts, (err, results) => cb(err, results))
}

const agent = new http.Agent({
    lookup: staticLookup
})

export async function handleMain(req, reply, rid) {
    const uid = req.query.uid || '1234123122'
    const programMainUrl = ysProgram[rid]
    if (!programMainUrl) {
        reply.code(404).send('Program Not found')
        return
    }

    try {
        const url = programMainUrl.split(',')
        const tsList = await getPlayUrls(rid, url[0], uid, url[1])
        const newList = tsList.split('\n').map(line => {
            if (line.toLowerCase().includes('.ts')) {
                const prefixUrl = new URL(url[1])
                const ts = `${prefixUrl.protocol}//${prefixUrl.host}${prefixUrl.pathname.substring(0, prefixUrl.pathname.lastIndexOf('/'))}/${line}`.replaceAll('&', "$")
                return `${req.protocol}://${req.hostname}${req.url}?ts=${ts}`
            } else {
                return line
            }
        }).join('\n')
        reply.send(newList)
    } catch (e) {
        req.log.error(e)
        resp.code(500).send('Internal Server Error')
    }
}

export async function handleTs(req, reply, ts, wsTime) {
    try {
        const tsUrl = ts.replaceAll('$', "&")
        const uid = req.query.uid || '1234123122'
        const resp = await clientFetch(tsUrl, {
            "accept": "*/*",
            "Referer": "https://api.cctv.cn/",
            "accept-encoding": "gzip, deflate",
            "accept-language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive"
        }, uid)

        reply.header('Content-Type', resp.headers.get('Content-Type'))
        reply.header('Content-Length', resp.headers.get('Content-Length'))
        return reply.send(resp.body)
    } catch (e) {
        req.log.error(e)
        reply.code(500).send('Internal Server Error')
    }
}

const cacheMap = new Map()
function getCache(cacheKey) {
    const obj = cacheMap.get(cacheKey)
    if (obj?.expired > Date.now()) {
        return obj
    }
}

function setCache(cacheKey, value) {
    cacheMap.set(cacheKey, {
        value,
        expired: Date.now() + 1000 * 3600 // 1h
    })
}

async function getPlayUrls(id, url, uid, path) {
    // return if cache
    const cacheKey = `${id}_${uid}`
    const cacheObj = getCache(cacheKey)
    if (cacheObj) {
        // console.log('cache hit')
        return fetchData(cacheObj.value, path, uid)
    }

    // no cache
	const bstrURL = "https://ytpvdn.cctv.cn/cctvmobileinf/rest/cctv/videoliveUrl/getstream"
	const postData = `appcommon={"ap":"cctv_app_tv","an":"央视投屏助手","adid":" ` + uid + `","av":"1.1.7"}&url=` + url

    const resp = await clientFetch(bstrURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: postData
    }, uid)

    const data = await resp.json()
    console.log('data1', data)
    const playUrl = data.url

    setCache(cacheKey, playUrl)
    return fetchData(playUrl, path, uid)
}

async function fetchData(playUrl, path, uid) {
    const resp = await clientFetch(playUrl, {}, uid)
    const text = await resp.text()
    return text
}

async function clientFetch(url, opts, uid) {
    const resp = await fetch(url, {
        ...opts,
        headers: {
            "User-Agent": "cctv_app_tv",
            "Referer": "api.cctv.cn",
            ...opts.headers,
            "UID": uid,
        }
    })

    return resp
}

export default {
    handleMain,
    handleTs
}