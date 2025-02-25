var gameUrl = "/activity";

//QQ 群信息
function getQQGroupList() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${gameUrl}/m1/yuyue202107/init`,
            type: 'post',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                resolve(res.data)
            },
            error: function (err) {
                reject(err)
            }
        })
    })
}