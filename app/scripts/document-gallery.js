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
      self.$placeholder = self.$element.find(".document-gallery-placeholder");
      
      self.isBusy = ko.observable(false);
      self.index = ko.observable(0);
      self.gallery = ko.observableArray([]);
        
      self.gallery.push(new dg.DocumentGalleryItem({
        imageUrl: "http://www.juicebox.net/demos/lite/full/images/_MG_8440.jpg",
        description: "hello"
      }));
      self.gallery.push(new dg.DocumentGalleryItem({
        imageUrl: "http://www.juicebox.net/demos/lite/full/images/_MG_0091.jpg",
        description: "hello world"
      }));
      self.gallery.push(new dg.DocumentGalleryItem({
        imageUrl: "http://www.juicebox.net/demos/lite/full/images/_MG_2354.jpg",
        description: "cool beans"
      }));

      self.item = ko.computed(function() {
        return self.gallery()[self.index()];
      });

      $("#btnPrev").click(function() {
        self.prev();
      });
      
      $("#btnNext").click(function() {
        self.next();
      });
      
      $("#btnDownload").click(function() {
        self.download();
      });
      
      $("#btnExpand").click(function() {
        self.expand();
      });
      
      // init change
      self.item.subscribe($.proxy(self._onBeforeItemChange, self), null, "beforeChange");
      self.item.subscribe($.proxy(self._onAfterItemChange, self));
    },
    
    prev: function() 
    {
      if (this.index() > 0)
      {
        this.index(this.index() - 1);
      }
    },
    
    next: function()
    {
      if (this.index() < this.gallery().length - 1)
      {
        this.index(this.index() + 1);
      }
    },
    
    download: function()
    {
      if (this.item())
      {
        this.item().download();
      }
    },
    
    expand: function()
    {
      
    },
    
    _onBeforeItemChange: function(item)
    {
      var self = this;
      
      self.$placeholder.css("background-image", item.imageCss());
      self.$placeholder.removeClass("fade-out");
    },
    
    _onAfterItemChange: function()
    {
      var self = this;
      
      window.setTimeout(function() {
        self.$placeholder.addClass("fade-out");
      });
    }
  };
  
  dg.DocumentGallery = DocumentGallery;
  
})(window.jQuery, window.ko, window.dg);