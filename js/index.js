var language;
function getLanguage() {
    $.ajax({
        url: 'language/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) {
            language = lang;

            $(".translate").each(function () {
                $(this).html($(this).html().replace(/{{(.+)}}/g, function ($0, $1) {
                    return language[$1];
                }));
            })
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function setLanguage(lang) {
    let localLang = localStorage.getItem('language');

    if (typeof lang == 'undefined' && localLang == null) {
        lang = 'fr';
    }
    else if (typeof lang == 'undefined') {
        lang = localLang;
    }

    localStorage.setItem('language', lang);
}

function load(file) {
    var url = new URL(window.location.href);

    if (url.searchParams.get("content") != null)
        file = url.searchParams.get("content") + ".html";

    langFile = file.split('.').slice(0, -1).join('.') + "_" + localStorage.getItem('language') + "." + file.split('.').pop();

    $.ajax({
        url: langFile,
        type: 'HEAD',
        error: function () {
            $(".content").load(file);
        },
        success: function () {
            $(".content").load(langFile);
        }
    });

    setTimeout(() => {
        try {
            $("html, body").animate({ scrollTop: $(location.hash).offset().top }, 500);
        } catch (error) {

        }
    }, 500);

}