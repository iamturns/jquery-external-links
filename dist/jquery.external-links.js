/**
 * jQuery External Links v0.0.1 - Detects external links and performs common actions
 * https://github.com/turnbullm/jquery-external-links
 */

(function($) {
  var ExternalLinks;
  window.ExternalLinks = ExternalLinks = (function() {
    ExternalLinks.prototype.defaultOptions = {
      internalDomain: window.location.host,
      setTargetBlank: true,
      addClass: true,
      "class": 'external',
      setTitle: true,
      title: 'Opens new window'
    };

    function ExternalLinks(el1, $el1, options) {
      this.el = el1;
      this.$el = $el1;
      if (options == null) {
        options = {};
      }
      this.options = $.extend(this.defaultOptions, options);
      if (this.isExternalUrl()) {
        this.markAsExternal();
      }
    }

    ExternalLinks.prototype.isExternalUrl = function() {
      return this.el.href.indexOf(this.options.internalDomain) === -1;
    };

    ExternalLinks.prototype.markAsExternal = function() {
      if (this.options.setTargetBlank) {
        this.$el.attr('target', '_blank');
      }
      if (this.options.addClass) {
        this.$el.addClass(this.options["class"]);
      }
      if (this.options.setTitle) {
        return this.$el.attr('title', this.options.title);
      }
    };

    return ExternalLinks;

  })();
  return $.fn.externalLinks = function(options) {
    if (options == null) {
      options = {};
    }
    return this.each(function() {
      var $el, el, newPluginInstance;
      el = this;
      $el = $(el);
      newPluginInstance = new window.ExternalLinks(el, $el, options);
      return $el.data('externalLinks', newPluginInstance);
    });
  };
})(jQuery);