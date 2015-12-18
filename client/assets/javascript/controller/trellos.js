trelloApp.controller("trelloController", function($location){
	var that = this
	that.bucket = [{name: "Bucket 1", task: ["Task 1", "Task 2"]}, {name: "Bucket 2", task: []}];

	that.addBucket = function(){
		console.log(that.name)
		that.bucket.push({name: that.name, task: []});
	}

	that.addTask = function(buckets) {
		console.log(that.tasker);
		var i = that.bucket.indexOf(buckets);
		that.bucket[i].task.push(that.tasker)
	}
})