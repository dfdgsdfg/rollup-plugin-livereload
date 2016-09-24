import lr from 'livereload'

export default function livereload (options = { watch: 'dist' }) {
  if (typeof options === 'string') {
    options = {
      watch: options
    }
  }

  const port = options.port || 35729
  const server = lr.createServer(options)
  server.watch(options.watch)

  return {
    name: 'livereload',
    transformBundle (code) {
      return code + `;document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + 
':${port}/livereload.js?snipver=1"></' + 'script>')`
    }
  }
}
