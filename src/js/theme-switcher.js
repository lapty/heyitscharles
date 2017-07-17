var themes;

function themeSwitcher() {
    this.init();
}

jQuery(document).ready(function($) {
    themeSwitcher.prototype = {
        init : function() {

            this.moonTheme = {
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "star"
                    },
                    "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "size_min": 1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 50,
                        "color": "#ffffff",
                        "opacity": 0.25,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.15,
                        "direction": "left",
                        "random": true,
                        "straight": true,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 600
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": true
                    }
                },
                "retina_detect": true
            };

            this.sunTheme = {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#fa1717"
                    },
                    "shape": {
                        "type": "triangle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        }
                    }
                },
                "retina_detect": true
            };

            particlesJS('particles-js', this.sunTheme);
            this.switchThemeEvents();
        },

        switchThemeEvents : function() {
          var self = this;

          $('.sun-toggle').on('click', function(){
            particlesJS('particles-js', self.sunTheme);
            $('body').removeClass('night');
          });

          // test particle js call
          $('img').on('click', function(){
            particlesJS('particles-js', self.moonTheme);
            $('body').addClass('night');
          }) ;
        }
    };

    themes = new themeSwitcher();

});
