(($) ->

  window.ExternalLinks = class ExternalLinks

    defaultOptions:
      internalDomain: window.location.host,
      setTargetBlank: true,
      addClass: true,
      class: 'external',
      setTitle: true,
      title: 'Opens new window'

    constructor: (@el, @$el, options = {}) ->
      @options = $.extend @defaultOptions, options
      @markAsExternal() if @isExternalUrl()

    isExternalUrl: ->
      @el.href.indexOf(@options.internalDomain) == -1

    markAsExternal: ->
      if @options.setTargetBlank then @$el.attr('target', '_blank')
      if @options.addClass then @$el.addClass(@options.class)
      if @options.setTitle then @$el.attr('title', @options.title)

  $.fn.externalLinks = (options = {}) ->
    return @each () ->
      el = @
      $el = $(el)
      newPluginInstance = new window.ExternalLinks(el, $el, options)
      $el.data('externalLinks', newPluginInstance)

)(jQuery)
