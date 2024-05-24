(function($) {
    "use strict";
    
    var map, mapSidebar, markers, CustomHtmlIcon, group;
    var markerArray = [];

    $.extend($.apusThemeCore, {
        /**
         *  Initialize scripts
         */
        listing_map_init: function() {
            var self = this;

            if ($('#listings-google-maps').length) {
                L.Icon.Default.imagePath = 'wp-content/themes/boxcar/images/';
            }
            
            setTimeout(function(){
                
                self.mapInit('listings-google-maps');
                self.mapInit('single-listing-google-maps');

            }, 50);
            
        },
        mapInit: function(map_e_id) {
            var self = this;

            var $window = $(window);

            if (!$('#' + map_e_id).length) {
                return;
            }
            
            map = L.map(map_e_id, {
                scrollWheelZoom: false
            });

            markers = new L.MarkerClusterGroup({
                showCoverageOnHover: false
            });

            CustomHtmlIcon = L.HtmlIcon.extend({
                options: {
                    html: "<div class='map-popup'></div>",
                    iconSize: [38, 50],
                    iconAnchor: [19, 50],
                    popupAnchor: [0, -40]
                }
            });

            $window.on('pxg:refreshmap', function() {
                map._onResize();
                setTimeout(function() {
                    
                    if(markerArray.length > 0 ){
                        group = L.featureGroup(markerArray);
                        map.fitBounds(group.getBounds()); 
                    }
                }, 100);
            });

            $window.on('pxg:simplerefreshmap', function() {
                map._onResize();
            });

            $('.tabs-detail-listing .listing-detail-location').on('click', function(){
                window.dispatchEvent(new Event('resize'));
            });

            if ( boxcar_listing_map_opts.map_service == 'mapbox' ) {
                var tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/'+boxcar_listing_map_opts.mapbox_style+'/tiles/{z}/{x}/{y}?access_token='+ boxcar_listing_map_opts.mapbox_token, {
                    attribution: " &copy;  <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &copy;  <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
                    maxZoom: 18,
                });
            } else if ( boxcar_listing_map_opts.map_service == 'here' ) {

                var hereTileUrl = 'https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/'+boxcar_listing_map_opts.here_style+'/{z}/{x}/{y}/512/png8?apiKey='+ boxcar_listing_map_opts.here_map_api_key +'&ppi=320';
                var tileLayer = L.tileLayer(hereTileUrl, {
                    attribution: " &copy;  <a href='https://www.mapbox.com/about/maps/'>Here</a> &copy; <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
                    maxZoom: 18,
                });

            } else if ( boxcar_listing_map_opts.map_service == 'openstreetmap' ) {
                
                var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                });

            } else {
                if ( boxcar_listing_map_opts.custom_style != '' ) {
                    try {
                        var custom_style = $.parseJSON(boxcar_listing_map_opts.custom_style);
                        var tileLayer = L.gridLayer.googleMutant({
                            type: boxcar_listing_map_opts.googlemap_type,
                            styles: custom_style
                        });
                    } catch(err) {
                        var tileLayer = L.gridLayer.googleMutant({
                            type: boxcar_listing_map_opts.googlemap_type
                        });
                    }
                } else {
                    var tileLayer = L.gridLayer.googleMutant({
                        type: boxcar_listing_map_opts.googlemap_type
                    });
                }
                $('#apus-listing-map').addClass('map--google');
            }

            map.addLayer(tileLayer);

            // check archive/single page
            if ( !$('#'+map_e_id).is('.single-listing-map') ) {
                self.updateMakerCards(map_e_id);
            } else {
                var $item = $('#'+map_e_id);
                
                if ( $item.data('latitude') !== "" && $item.data('latitude') !== "" ) {
                    var zoom = (typeof MapWidgetZoom !== "undefined") ? MapWidgetZoom : 15;
                    self.addMakerToMap($item);
                    map.addLayer(markers);
                    map.setView([$item.data('latitude'), $item.data('longitude')], zoom);
                    $(window).on('update:map', function() {
                        map.setView([$item.data('latitude'), $item.data('longitude')], zoom);
                    });

                    $('.location-map-view').on('click', function(e){
                        e.preventDefault();
                        $('#single-listing-street-view-map').hide();
                        $('#'+map_e_id).show();
                        $('.location-street-view').removeClass('hidden');
                        $(this).removeClass('hidden').addClass('hidden');
                        map._onResize();
                    });

                } else {
                    $('#' + map_e_id).hide();
                }
            }
        },
        updateMakerCards: function(map_e_id) {
            var self = this;
            var $items = $('.main-items-wrapper .map-item');

            if ($('#' + map_e_id).length && typeof map !== "undefined") {
                
                if (!$items.length) {
                    map.setView([boxcar_listing_map_opts.default_latitude, boxcar_listing_map_opts.default_longitude], 12);
                    return;
                }

                map.removeLayer(markers);
                markers = new L.MarkerClusterGroup({
                    showCoverageOnHover: false
                });
                $items.each(function(i, obj) {
                    self.addMakerToMap($(obj), true);
                });

                map.addLayer(markers);

                if(markerArray.length > 0 ){
                    group = L.featureGroup(markerArray);
                    map.fitBounds(group.getBounds()); 
                }
            }
        },
        addMakerToMap: function($item, archive) {
            var self = this;
            var marker;

            if ( $item.data('latitude') == "" || $item.data('longitude') == "") {
                return;
            }
            
            if(boxcar_listing_map_opts.default_pin){
                var img_icon = "<img src='" + boxcar_listing_map_opts.default_pin + "'>";
            }else{
                var img_icon = '<i class="flaticon-pin"></i>';
            }
            var mapPinHTML = "<div class='map-popup'><div class='icon-wrapper has-img'>" + img_icon + "</div></div>";
            

            marker = L.marker([$item.data('latitude'), $item.data('longitude')], {
                icon: new CustomHtmlIcon({ html: mapPinHTML })
            });

            if (typeof archive !== "undefined") {
                
                $item.hover(function() {
                    $(marker._icon).find('.map-popup').addClass('map-popup-selected');
                }, function() {
                    $(marker._icon).find('.map-popup').removeClass('map-popup-selected');
                });

                var customOptions = {
                    'maxWidth': '330',
                };

                var logo_html = '';
                if ( $item.data('img') ) {
                    logo_html =  "<div class='image-wrapper image-loaded'>" +
                                "<img src='" + $item.data('img') + "'>" +
                            "</div>";
                }

                var title_html = '';
                if ( $item.find('.listing-title').length ) {
                    title_html = "<h3 class='listing-title'>" + $item.find('.listing-title').html() + "</h3>";
                }

                var mileage = '';
                if ( $item.find('.mileage').length ) {
                    mileage = "<div class='listing-meta'>" + $item.find('.mileage .value-suffix').html() + "</div>";
                }

                var fuel_type = '';
                if ( $item.find('.fuel_type').length ) {
                    fuel_type = "<div class='listing-meta'>" + $item.find('.fuel_type .value-suffix').html() + "</div>";
                }

                var transmission = '';
                if ( $item.find('.transmission').length ) {
                    transmission = "<div class='listing-meta'>" + $item.find('.transmission .value-suffix').html() + "</div>";
                }

                var price_html = '';
                if ( $item.find('.listing-price').length ) {
                    price_html = "<div class='listing-price m-0'>" + $item.find('.listing-price .main-price').html() + "</div>";
                }

                marker.bindPopup(
                    "<div class='listing-item listing-grid v1'>" +
                        "<div class='listing-thumbnail-wrapper'>" + logo_html +
                        "</div>" + 
                        "<div class='inner-content'>" + title_html + "<div class='listing-metas-v2 d-flex align-items-center flex-wrap'>" + mileage + fuel_type + transmission + "</div><div class='bottom-info-v2'>" + price_html +
                    "</div></div></div>", customOptions).openPopup();
            }

            markers.addLayer(marker);
            markerArray.push(L.marker([$item.data('latitude'), $item.data('longitude')]));
        }

    });

    $.apusThemeExtensions.listing_map = $.apusThemeCore.listing_map_init;

    
})(jQuery);