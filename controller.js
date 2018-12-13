let tool = require('./models/tool')


module.exports = {
	add_tool : function (req, res){
		console.log(req.body)
		try{
			new_tool = new tool(req.body.tool).save()
			new_tool.then((saved_tool)=>{
				res.json({msg:'tool saved.'})
			})
			new_tool.catch((err)=>{console.log(err)})
		}catch(e){
			console.log('tool fields not as expected.')
			res.json({msg:'tool not saved. maybe some field was not as expected.'})
		}
		
	},	

	get_all_tools : function(req, res){
		let all_tools = tool.find({}).exec()
		all_tools.then((tools)=>{res.json(tools)})
	},

	search : function(req, res){

	},


}
