function expandChapter(index) {
    var chapters = document.getElementsByClassName("chapter");
    var activeChapter = chapters[index];
    var isCollapsed = !activeChapter.classList.contains("active");

    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        if (i !== index) {
            chapter.classList.remove("active");
            var imgs = chapter.getElementsByTagName("img");
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.display = "none";
            }
        }
    }

    if (isCollapsed) {
        activeChapter.classList.add("active");
        var imgs = activeChapter.getElementsByTagName("img");
        for (var j = 0; j < imgs.length; j++) {
            if (imgs[j].getAttribute("data-src")) {
                imgs[j].setAttribute("src", imgs[j].getAttribute("data-src"));
                imgs[j].removeAttribute("data-src");
            }
            imgs[j].style.display = "block";
        }
    } else {
        activeChapter.classList.remove("active");
        var imgs = activeChapter.getElementsByTagName("img");
        for (var j = 0; j < imgs.length; j++) {
            imgs[j].style.display = "none";
        }
        // Scroll to the chapter ID or name
        var chapterId = activeChapter.getAttribute("id");
        var chapterName = activeChapter.querySelector("p").textContent;
        var targetElement = chapterId ? activeChapter : activeChapter.querySelector("p");
        targetElement.scrollIntoView();
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
