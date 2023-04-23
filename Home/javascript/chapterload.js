function expandChapter(index) {
    var chapters = document.getElementsByClassName("chapter");
    for (var i = 0; i < chapters.length; i++) {
        if (i !== index) {
            chapters[i].classList.remove("active");
            var imgs = chapters[i].getElementsByTagName("img");
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.display = "none";
            }
        }
    }
    var chapter = chapters[index];
    if (chapter.classList.contains("active")) {
        chapter.classList.remove("active");
        var imgs = chapter.getElementsByTagName("img");
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].style.display = "none";
        }
    } else {
        chapter.classList.add("active");
        var imgs = chapter.getElementsByTagName("img");
        for (var j = 0; j < imgs.length; j++) {
            if (imgs[j].getAttribute("data-src")) {
                imgs[j].setAttribute("src", imgs[j].getAttribute("data-src"));
                imgs[j].removeAttribute("data-src");
            }
            imgs[j].style.display = "block";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    /* ====== Lazy Load Images in Chapters ====== */
    var originalOrder = true;

    var chapterElements = document.getElementsByClassName("chapter");
    for (var i = 0; i < chapterElements.length; i++) {
        chapterElements[i].addEventListener("click", function () {
            var index = Array.from(chapterElements).indexOf(this);
            expandChapter(index);
        });
        var imgs = chapterElements[i].getElementsByTagName("img");
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].setAttribute("data-src", imgs[j].getAttribute("src"));
            imgs[j].removeAttribute("src");
        }
    }
});
