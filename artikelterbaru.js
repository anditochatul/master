// Recent Post by Andito Blog
function showlatestpostswiththumbs(t) {
    document.write('<ul class="recent_posts_andito">');
    for (var e = 0; e < posts_no; e++) {
        var r, n = t.feed.entry[e],
            i = n.title.$t;
        if (e == t.feed.entry.length) break;
        for (var o = 0; o < n.link.length; o++) {
            if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) var l = n.link[o].title,
                m = n.link[o].href;
            if ("alternate" == n.link[o].rel) {
                r = n.link[o].href;
                break
            }
        }
        var u;
        try {
            u = n.media$thumbnail.url
        } catch (h) {
            s = n.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), u = -1 != a && -1 != b && -1 != c && "" != d ? d : "http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png"
        }
        var p = n.published.$t,
            f = p.substring(0, 4),
            g = p.substring(5, 7),
            v = p.substring(8, 10),
            w = new Array;
        if (w[1] = "Jan", w[2] = "Feb", w[3] = "Mar", w[4] = "Apr", w[5] = "May", w[6] = "Jun", w[7] = "Jul", w[8] = "Aug", w[9] = "Sep", w[10] = "Oct", w[11] = "Nov", w[12] = "Dec", document.write('<li class="recent-posts-list">'), 1 == showpoststhumbs && document.write('<a href="' + r + '"><img class="recent-post-thumb" src="' + u + '"/></a>'), document.write('<div class="recent-post-title"><a href="' + r + '" target ="_top">' + i + "</a></div>"), "content" in n) var A = n.content.$t;
        else if ("summary" in n) var A = n.summary.$t;
        else var A = "";
        var k = /<\S[^>]*>/g;
        if (A = A.replace(k, ""), 1 == post_summary)
            if (A.length < summary_chars) document.write(A);
            else {
                A = A.substring(0, summary_chars);
                var y = A.lastIndexOf(" ");
                A = A.substring(0, y), document.write(A + "...")
            }
        var _ = "",
            $ = 0;
        document.write('<br><div class="recent-posts-details">'), 1 == posts_date && (_ = _ + w[parseInt(g, 10)] + " " + v + " " + f, $ = 1), 1 == readmorelink && (1 == $ && (_ += " | "), _ = _ + '<a href="' + r + '" class="url" target ="_top">Read more</a>', $ = 1), 1 == showcommentslink && (1 == $ && (_ += " <br> "), "1 Comments" == l && (l = "1 Comment"), "0 Comments" == l && (l = "No Comments"), l = '<a href="' + m + '" target ="_top">' + l + "</a>", _ += l, $ = 1), document.write(_), document.write("</div>"), document.write("</li>")
    }
    document.write("</ul>")
}
