const urlMetadata = require('url-metadata')

export default function handler(req, res) {
  if(req.method === 'POST'){
    const { url } = req.body
    urlMetadata(url).then(
      function (metadata) { // success handler
          res.status(200).json({metadata});
      },
      function (error) { // failure handler
          res.status(500).json({error});
      })
  }
  // res.end(`URL: ${url}`)
  // res.status(200).json({url})
}