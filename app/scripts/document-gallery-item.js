(function($, ko, dg) {
  
  var DocumentGalleryItem = function(config)
  {
    this.config = config;
    this.init();
  };
  
  DocumentGalleryItem.prototype = {
    constructor: DocumentGalleryItem,
    
    init: function()
    {
      var self = this;  

      self.imageUrl = ko.observable(self.config.imageUrl);
      self.description = ko.observable(self.config.description);
      self.imageCss = ko.computed(function() {
        return self.imageUrl()
          ? "url('" + self.imageUrl() + "')"
          : "";        
      })
    },
    
    download: function()
    {
      console.log("init download");
    }
  };
  
  dg.DocumentGalleryItem = DocumentGalleryItem;
  
})(window.jQuery, window.ko, window.dg);