/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	upload: function  (req, res) {
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});						
		//	Call to /upload via GET is error

		var uploadFile = req.file('uploadFile');
		console.log(uploadFile);
		
		//Use this to upload to custom folder
		//If you don't want this remove {dirname: ''}
		//There are other options also .Check at skipper docs

		//If dirname is not set the upload will be done to ./tmp/uploads	
	    uploadFile.upload({ dirname: '../../assets/images'},function onUploadComplete (err, files) {				
	    // Files will be uploaded to /assets/images/
	    // Access the files via localhost:1337/images/yourfilename

	    	if (err) return res.serverError(err);								
	    	//	IF ERROR Return and send 500 error with error
			
	    	console.log(files);
	    	res.json({status:200,file:files});
	    	//This will print the details including new file name upload path etc
	    });
	},
};

