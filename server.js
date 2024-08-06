import Fastify from 'fastify'
import { getPlayList } from './list.js'
import itv from './itv.js'
import ysptp from './ysptp.js'


const fastify = Fastify({
    logger: true
})

const address = process.env['ADDRESS']
const basePath = process.argv[2] ? `/${process.argv[2]}` : process.env['BASE_PATH'] ? `/${process.env['BASE_PATH']}` : ''

fastify.get(`${basePath}/tv.m3u`, (req, reply) => {
    reply.header('Content-Type', 'application/octet-stream')
    reply.header('Content-Disposition', 'attachment; filename=tv.m3u')

    const rootPath = address??`${req.protocol}://${req.hostname}`
    reply.send(getPlayList(rootPath))
})

fastify.get(`/:path/:rid`, async (request, reply) => {
    const { path, rid } = request.params
    const { ts, cdn, wsTime } = request.query
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

const start = async () => {
    itv.setup(fastify)
    try {
        await fastify.listen({ port: 32888, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
