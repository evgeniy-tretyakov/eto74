(function ($) {

  oneHeightElements = function(element) {
    var maxheight = 0;
    element.height('auto');
    element.each(function () {
        var height = $(this).height();
        if (height > maxheight) {
            maxheight = height;
        }
    });
    element.height(maxheight);
  }

  burgerOpener = function(trigger, menu, className1, className2, mobileClass, parentClass){

    if (screen.width < 900) {
      menu.addClass(mobileClass);
    } else {
      menu.removeClass(mobileClass);
    };

    sliding = function(){
      menu.toggleClass(className2);
      trigger.toggleClass(className1);
      trigger.closest('.header--burger').toggleClass(parentClass);
    };

    trigger.on('click', function(){
      sliding();
    });
    $('.mobile-menu').on('click', function(){
      sliding();
    });
  };

  footerStyling = function(element, wrapper1, wrapper2){
    let menuItems = element.find('li');
    element.find('.nav > li:lt(4)').not('.last').wrapAll(wrapper1);
    element.find('.nav > li').wrapAll(wrapper2);
    /*
    element.find('.nav > .last').prev(':not(.footer-col-1)').andSelf().wrapAll(wrapper2);
    */
  };

  footerDropdown = function(element){
    element.each(function(){
      if ($(window).width() < 9000) {
        $(this).on('click', function(){
          $(this).next().slideToggle();
        });
      };
    });
  };

  catalogSummary = function(element){
    element.each(function(){
      let thisListLength = $(this).children('.views-row').length;
      let summaryNumber = thisListLength-8;
      let cardLink = $(this).closest('.homepage-catalog--row').find('.views-field-name a').attr('href');
      if(thisListLength > 8){
        $(this).append('<div class="summaryLink"><a href=" ' + cardLink + '">+ '+ summaryNumber +' категорий</a></div>');
      };
    });
  };

  contactsWrapper = function(element, wrapper){
    element.prev().andSelf().wrapAll(wrapper);
  };

  contactsSlide = function(element, button){
    element.find('.sliding-form').append(button);
  };

  mapSLide = function(element){
    let button = element.find('.map-slide-button');
    button.on('click', function(){
      $(this).parent().toggleClass('slided');
      $(this).toggleClass('shrinked');
      $('#map').toggleClass('lightened');
    });
  };

  sliderNavPositioning = function(paginationRow, prevButton, nextButton){
    let pagLength = paginationRow.length;
    let pagItemWidth = paginationRow.width();
    let pagRowWidth = pagItemWidth*pagLength;
    let buttonWidth = prevButton.width()+15;
    let marginValue = (pagRowWidth+buttonWidth)/2;
    if ($(window).width() > 820) {
      prevButton.css('margin-right', marginValue);
      nextButton.css('margin-left', marginValue);
    }
  };

  imgCheck = function(element){
    element.each(function(){
      imageBlock = $(this).find('.field-image .field-content');
      infoBlock = $(this).find('.field-description-and-characteristics');
      if (imageBlock.find('img').length < 1) {
        imageBlock.closest('.field-image').css('width', '0');
        imageBlock.closest('.field-image').css('max-width', 'none');
        imageBlock.closest('.field-image').css('heignt', '0');
        imageBlock.closest('.field-image').css('margin', '0');
        infoBlock.css('max-width', '100%');
      };
    });
  };

  catalogListStyling = function(element, wrapper){
    element.each(function(){
      $(this).children().not('.views-field-field-fragment').wrapAll(wrapper);
    });
  };

  sidemenuToggler = function(element, className1, className2){
    element.each(function(){
      if($(this).next('ul').length < 1){
        $(this).addClass('js-menu-item--empty');
      };
      $(this).on('click', function(e){
        if($(this).next().length){
          e.preventDefault();
          $(this).toggleClass(className1);
          $(this).next().slideToggle();
          $(this).next().toggleClass(className2);
        };
      });
      if($('.block-taxonomy-menu-block > ul').find('.active').length){
        $('.block-taxonomy-menu-block > ul').find('.active a').toggleClass(className1);
        $('.block-taxonomy-menu-block > ul').find('.active a').next().toggleClass(className2);
        $('.block-taxonomy-menu-block > ul').find('.active a').next().show();
      }
      if($('.block-taxonomy-menu-block > ul').find('.active').length){
        $('.block-taxonomy-menu-block > ul').find('.active-trail a').toggleClass(className1);
        $('.block-taxonomy-menu-block > ul').find('.active-trail a').next().toggleClass(className2);
        $('.block-taxonomy-menu-block > ul').find('.active-trail a').next().show();
      }
    });
  };

  emptyLineFixer = function(element) {
    $(element).each(function(){
      if (!$(this).text().trim().length && $(this).children().length < 1 ) {
        $(this).remove();
      };
    });
  };

  tabsCardWrapper = function(element, wrapper){
    element.each(function(){
      let text = $(this).find('.field-type-text');
      text.next().andSelf().wrapAll(wrapper);
    });
  };

  clickableBlock = function(element, clickTrigger){
    element.each(function(){
      $(this).on('click', function(){
        let link = $(this).find(clickTrigger);
        $(link)[0].click();
      });
    });
  };

  checkOffset = function(element) {
    if(element.length){
      let menuElement = element;
      let menuElementHeight = menuElement.height();
      if(menuElement.offset().top + $('#social-float').height() >= $('.footer').offset().top - menuElementHeight) 
          menuElement.addClass('menuScrolled');
      if($(document).scrollTop() + window.innerHeight < $('.footer').offset().top)
          menuElement.removeClass('menuScrolled');
    };
  };

  catalogChecker = function(catalogList, menuElement){
    if(catalogList.children('.views-row').length < 3){
      menuElement.addClass('jsStatic');
    } else {
      menuElement.addClass('jsMovable');
    }
  };

  dlLinkHtmlFix = function(element, markup){
    element.each(function(){
      $(this).text(markup);
    });
  };

  sidebarWrapper = function(element){
    element.wrap("<div class='js-sidebar-wrapper'></div>");
  };

  langSwitcher = function(ru, eng, className){
    if (window.location.href.indexOf("en.") > -1) {
      eng.addClass(className);
      ru.removeClass(className);
    } else {
      ru.addClass(className);
      eng.removeClass(className);
    };
  };


  $(document).ready(function() {
    oneHeightElements($('.homepage-latest .owl-item'));
    burgerOpener($('.burger-button'), $('.header--menu'), 'burger-js--active', 'burger-menu--visible', 'mobile-menu', 'js-burger-move');
    footerStyling($('footer.footer'), '<div class="footer-col-1"></div>', '<div class="footer-col-2"></div>');
    footerDropdown($('footer.footer .nav li .dropdown-toggle'));
    catalogSummary($('.homepage-catalog .view-catalog-main .view-content .views-field-view .view-catalog-main .view-content'));
    contactsWrapper($('.page-node-46 .region-content .block-system'), '<div class="sliding-form"><div class="sliding-form__content"></div></div>');
    contactsSlide($('.page-node-46'), '<div class="map-slide-button"></div>');
    mapSLide($('.page-node-46'));
    imgCheck($('.homepage-latest .owl-item'));
    sliderNavPositioning($('.owl-theme .owl-controls .owl-page'), $('.owl-theme .owl-controls .owl-buttons .owl-prev'), $('.owl-theme .owl-controls .owl-buttons .owl-next'));
    catalogListStyling($('.page-catalog .view-news-main .view-content .views-row'), '<div class="field-description-and-characteristics"></div>');
    catalogListStyling($('.page-taxonomy-term .view-news-main .view-content .views-row'), '<div class="field-description-and-characteristics"></div>');
    sidemenuToggler($('.block-taxonomy-menu-block > ul > li > a'), 'category-triggered', 'menu-opened');
    emptyLineFixer($('p'));
    tabsCardWrapper($('.node-type-product .region-content .node-product .group-footer .horizontal-tabs fieldset.horizontal-tabs-pane .panel-body .field-name-field-classification .field-items .field-item'), '<div class="tab-text-wrapper"><?div>');
    clickableBlock($('.page-catalog .view-news-main .view-content .views-row'), 'button');
    clickableBlock($('.page-taxonomy-term .view-news-main .view-content .views-row'), 'button');
    clickableBlock($('.homepage-latest .owl-item'), '.views-field-view-node .field-content a');


    sidebarWrapper($('.page-catalog .main--content .region-content .block-taxonomy-menu-block'));
    sidebarWrapper($('.page-taxonomy-term .main--content .region-content .block-taxonomy-menu-block'));

    $(document).scroll(function() {
      checkOffset($('.page-taxonomy-term .main--content .region-content .js-sidebar-wrapper section'));
    });

    $(document).scroll(function() {
      checkOffset($('.page-catalog .main--content .region-content .js-sidebar-wrapper section'));
    });

    catalogChecker($('.page-catalog .view-news-main .view-content'), $('.page-catalog .main--content .region-content .js-sidebar-wrapper section'));
    catalogChecker($('.page-taxonomy-term .view-news-main .view-content'), $('.page-taxonomy-term .main--content .region-content .js-sidebar-wrapper section'));

    dlLinkHtmlFix($('.page-node-46 .region-content .node-contacts-address .field-name-field-doc-save .field-items a'), 'Карточка предприятия');

    langSwitcher($("#RUru"), $('#ENen'), 'lang--current');

  });
})(jQuery);
