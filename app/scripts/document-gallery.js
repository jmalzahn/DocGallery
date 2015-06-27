window.dg = window.dg || {};

(function($, ko, dg) {
  
  var DocumentGallery = function(config)
  {
    this.config = config;
    this.init();
  };
  
  DocumentGallery.prototype = {
    constructor: DocumentGallery,
    
    init: function()
    {
      var self = this;  
      self.$element = $("#DocumentGallery");
      self.gallery = ko.observableArray([   
        "http://www.juicebox.net/demos/lite/full/images/_MG_8440.jpg",
        "http://www.juicebox.net/demos/lite/full/images/_MG_0091.jpg",
        "http://www.juicebox.net/demos/lite/full/images/_MG_2354.jpg"]);
    }
  };
  
  dg.DocumentGallery = DocumentGallery;
  
})(window.jQuery, window.ko, window.dg);