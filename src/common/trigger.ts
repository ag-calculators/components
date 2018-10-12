
const Trigger = function(target, func, errorCallback) {
    this.target = target;
    this.func = func || function () {};
    this.errorCallback = errorCallback || function () {}
};

Trigger.prototype = {
	trigger: function(args)	{
		try
		{
			return this.func.apply(this.target, args);
		}
		catch(e) 
		{
			this.errorCallback(e);
		}
	}
}

export default Trigger;
