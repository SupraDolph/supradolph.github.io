var language;

//RÉCUPÈRE LA LANGUE
function getLanguage() {
    var url = new URL(window.location.href);
    $.ajax({
        url: 'language/' + url.searchParams.get("language") + '.json',
        dataType: 'json',
        async: false,
        dataType: 'json',
        success: function(lang) {
            language = lang;

            $(".translate").each(function() {
                $(this).html($(this).html().replace(/{{(.+)}}/g, function($0, $1) {
                    return language[$1];
                }));
            })
        },
        error: function(err) {
            console.log(err);
        }
    });
}

//DÉFINI LA LANGUE
function setLanguage(lang) {
    var url = new URL(window.location.href);
    let localLang = url.searchParams.get("language");

    if (typeof lang == 'undefined' && localLang == null) {
        lang = 'fr_FR';
        url.searchParams.set('language', lang);
        window.location.href = url;
    } else if (typeof lang == 'undefined') {
        lang = localLang;
    } else {
        url.searchParams.set('language', lang);
        window.location.href = url;
    }
}

function gotoPage(page) {
    var url = new URL(window.location.href);

    if (typeof page == 'undefined') {
        page = "index.html";
    }

    url.searchParams.set("content", page);
    url.hash = "";
    window.location.href = url;
}



//FONCTION PRINCIPALE
function load(file) {
    let href = decodeURIComponent(window.location.href);
    href = href.replace(/\?/g, (i => m => !i++ ? m : '&')(0));
    var url = new URL(window.location.href);

    if (url.searchParams.get("content") != null)
        file = url.searchParams.get("content") + ".html";

    langFile = file.split('.').slice(0, -1).join('.') + "_" + url.searchParams.get("language") + "." + file.split('.').pop();

    $.ajax({
        url: langFile,
        type: 'HEAD',
        error: function() {
            $(".content").load(file, function() {
                renderAfterLoad();
            });
        },
        success: function() {
            $(".content").load(langFile, function() {
                renderAfterLoad();
            });
        }
    });

    setTimeout(() => {
        try {
            $("html, body").animate({ scrollTop: $(location.hash).offset().top }, 500);
        } catch (error) {}
    }, 500);
}

function renderAfterLoad() {
    try {
        $("#toc").toc({
            content: ".content",
            headings: "h2,h3"
        });

        $("html, body").animate({ scrollTop: $(location.hash).offset().top }, 500);
    } catch (error) {}
}