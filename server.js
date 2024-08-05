import Fastify from 'fastify'
import { getPlayList } from './list.js'
import itv from './itv.js'
import ysptp from './ysptp.js'


const fastify = Fastify({
    logger: true
})

const basePath = ''

fastify.get(`${basePath}/tv.m3u`, (request, reply) => {
    reply.header('Content-Type', 'application/octet-stream')
    reply.header('Content-Disposition', 'attachment; filename=tv.m3u')
    reply.send(getPlayList(request.hostname))
})

fastify.get(`/:path/:rid`, async (request, reply) => {
    const {path, rid} = request.params
    const {ts, cdn, wsTime} = request.query
    switch (path) {
        case "itv":
            if (ts) {
                return await itv.handleTs(request, reply, ts)
            } else {
                return await itv.handleMain(request, reply, cdn, rid)
            }
            break
        case "ysptp":
            if (ts) {
                return await ysptp.handleTs(request, reply, ts, wsTime)
            } else {
                return await ysptp.handleMain(request, reply, rid)
            }
            break

        default:
            reply.code(404).send('Not found')
    }
})

fastify.listen({ port: 32888 }, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`)
})