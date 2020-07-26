(function() {
            var loadedArray = [];
            var scripts = [
                "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js",
                "https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js",
                "https://cdn.jsdelivr.net/npm/waypoints@4.0.1/lib/jquery.waypoints.min.js",
                "https://cdn.jsdelivr.net/npm/jquery.stellar@0.6.2/jquery.stellar.min.js",
                "https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/owl.carousel.min.js",
                "https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/jquery.magnific-popup.min.js",
                "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js",
                "https://cdn.jsdelivr.net/npm/jquery.animate-number@0.0.14/jquery.animateNumber.min.js",
                "https://cdn.jsdelivr.net/npm/scrollax@1.0.0/scrollax.min.js"
            ];

            function loadMain() {
                var main = document.createElement("script");
                main.src = "/js/main.js";
                main.async = "async";
                document.body.append(main);
            }
            scripts.forEach(function(src) {
                var script = document.createElement("script");
                var id = loadedArray.length;
                script.src = src;
                script.async = "async";
                loadedArray.push(false);
                script.addEventListener("load", function() {
                    loadedArray[id] = true;
                    if (loadedArray.every(function(value) {
                            return value
                        }) && loadedArray.length === scripts.length) {
                        loadMain();
                    }
                })
                document.body.appendChild(script);
            });
        })()