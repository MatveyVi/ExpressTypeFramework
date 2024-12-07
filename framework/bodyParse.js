module.exports = (req, res) => {
    let body = ""

    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        if(body){
            req.body = JSON.parse(body)
        }
        const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
        if (!emitted) {
            res.end()
        }
    })
}